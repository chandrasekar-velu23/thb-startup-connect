const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directory = 'public/images';
const extensions = ['.png', '.jpg', '.jpeg'];

async function optimizeImages() {
  if (!fs.existsSync(directory)) {
    console.error(`Directory ${directory} does not exist.`);
    return;
  }

  const files = fs.readdirSync(directory);
  let totalOriginalSize = 0;
  let totalNewSize = 0;

  console.log('--- Starting Image Optimization ---');
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (extensions.includes(ext)) {
      const inputPath = path.join(directory, file);
      const stats = fs.statSync(inputPath);
      const originalSize = stats.size;
      totalOriginalSize += originalSize;
      
      console.log(`Optimizing ${file} (${(originalSize / 1024).toFixed(2)} KB)...`);
      
      try {
        const buffer = fs.readFileSync(inputPath);
        let sharpInstance = sharp(buffer);
        
        let outputBuffer;
        if (ext === '.png') {
          outputBuffer = await sharpInstance
            .png({ quality: 80, compressionLevel: 9 })
            .toBuffer();
        } else {
          outputBuffer = await sharpInstance
            .jpeg({ quality: 80, progressive: true })
            .toBuffer();
        }
        
        // Only overwrite if the new file is actually smaller
        if (outputBuffer.length < originalSize) {
          fs.writeFileSync(inputPath, outputBuffer);
          const newSize = outputBuffer.length;
          totalNewSize += newSize;
          const reduction = ((originalSize - newSize) / originalSize) * 100;
          console.log(`  Done: ${(newSize / 1024).toFixed(2)} KB (${reduction.toFixed(2)}% reduction)`);
        } else {
          totalNewSize += originalSize;
          console.log(`  Skipped: Already optimized.`);
        }
      } catch (err) {
        console.error(`  Error optimizing ${file}:`, err.message);
        totalNewSize += originalSize;
      }
    }
  }

  const totalReduction = ((totalOriginalSize - totalNewSize) / totalOriginalSize) * 100;
  console.log('--- Optimization Complete ---');
  console.log(`Total Size Reduction: ${((totalOriginalSize - totalNewSize) / (1024 * 1024)).toFixed(2)} MB (${totalReduction.toFixed(2)}% reduction)`);
}

optimizeImages().catch(err => console.error(err));
