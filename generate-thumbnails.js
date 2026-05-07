const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// List of videos and their corresponding thumbnail names
const videos = [
  { video: 'TECH4ED VIDEO.mp4', thumbnail: 'tech4ed-thumbnail.jpg' },
  { video: 'DTC.mp4', thumbnail: 'dtc-thumbnail.jpg' },
  { video: '1.mp4', thumbnail: 'testimonial-1-thumbnail.jpg' },
  { video: '2.mp4', thumbnail: 'testimonial-2-thumbnail.jpg' },
  { video: '3.mp4', thumbnail: 'testimonial-3-thumbnail.jpg' }
];

const videosDir = path.join(__dirname, 'public', 'videos');

console.log('🎬 Generating video thumbnails...\n');

// Function to generate thumbnail for a single video
function generateThumbnail(videoFile, thumbnailFile) {
  const videoPath = path.join(videosDir, videoFile);
  const thumbnailPath = path.join(videosDir, thumbnailFile);

  // FFmpeg command to extract a frame at 2 seconds and resize to 400x225 (16:9)
  const command = `ffmpeg -i "${videoPath}" -ss 00:00:02.000 -vframes 1 -vf "scale=400:225:force_original_aspect_ratio=decrease,pad=400:225:(ow-iw)/2:(oh-ih)/2" "${thumbnailPath}"`;

  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`❌ Error generating thumbnail for ${videoFile}:`, error.message);
        reject(error);
      } else {
        console.log(`✅ Generated thumbnail: ${thumbnailFile}`);
        resolve();
      }
    });
  });
}

// Generate thumbnails for all videos
async function generateAllThumbnails() {
  for (const { video, thumbnail } of videos) {
    try {
      await generateThumbnail(video, thumbnail);
    } catch (error) {
      console.error(`Failed to process ${video}`);
    }
  }
  console.log('\n🎉 All thumbnails generated successfully!');
  console.log('📁 Check your public/videos/ folder for the new thumbnail files.');
}

// Run the thumbnail generation
generateAllThumbnails().catch(console.error);