const apiKey = 'AIzaSyDL4EeYZ-ukoxFsRaX6uZtD9P0NV5LHqTM';
const videoContainer = document.getElementById('videoContainer');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('search');

const fetchVideos = async (search = 'krishnasong') => {
  try {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${search}&type=video&key=${apiKey}`);
    const data = await response.json();
    displayVideos(data.items);
  } catch (error) {
    console.error(error);
  }
};

const displayVideos = (videos) => {
  videoContainer.innerHTML = '';
  videos.forEach(video => {
    const videoElement = document.createElement('div');
    videoElement.classList.add('video');
    videoElement.innerHTML = `
      <iframe src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h3>${video.snippet.title}</h3>
    
    `;
    videoContainer.appendChild(videoElement);
  });
};

const searchVideos = () => {
  const search = searchInput.value;
  fetchVideos(search);
};

searchButton.addEventListener('click', searchVideos);
searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    searchVideos();
  }
});

// default videos 
fetchVideos();