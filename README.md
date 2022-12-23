<!doctype html>
<video id="video" controls autoplay></video>

<script>
  const video = document.getElementById('video');

  function startVideoStream() {
    // Make an HTTP request to the /video_feed route of the Flask app
    const stream = new Request('http://localhost:3502/video_feed');
    const videoSrc = URL.createObjectURL(stream);
    video.src = videoSrc;
  }

  startVideoStream();
</script>
