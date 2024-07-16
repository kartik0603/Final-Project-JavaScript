const getData = async (search) => {
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search}&type=video&key=AIzaSyAzE-Y0jSHwi94FYOKd3zDIbSo6uh6Yzog`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  
  getData('javascript'); 