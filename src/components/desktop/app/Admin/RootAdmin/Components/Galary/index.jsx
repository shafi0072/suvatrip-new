import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';
import { useState } from 'react';
import { baseUrl } from '@/src/config/serverConfig';
import Swal from 'sweetalert2';
import AddImageModals from '@/src/components/desktop/core/modal/AddImage';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
const index = ({ hotelInfo }) => {
  const [blur, setBlur] = useState(false)
  const [files, setFiles] = useState([])

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(() => {
    setBlur(true)
    setTimeout(() => {
      setBlur(false)
    }, 1000)
  }, [])

  const handleDeleteImage = (image) => {
    console.log(image)
    fetch(`${baseUrl}/hotel/user/hotel/${hotelInfo?._id}/images/${encodeURIComponent(image)}`, {
      method: 'DELETE',
      headers: {
        'authorization': localStorage.getItem('accessToken')
      },
      body: "",
      redirect: 'follow'
    })
      .then((res) => res.json)
      .then((data) => {
        Swal.fire(
          'Image Deleted',
          'successFully',
          'success'
        )
      })
      .catch(err => {
        Swal.fire(
          'Image Deleted',
          'successFully',
          'error'
        )
      })
  }

  const handleFileOnChange = (e) => {
    let newFiles = [];

    const file = e.target.files[0];

    const image = new Image();
    image.src = URL.createObjectURL(file);

    image.onload = () => {
      const width = image.width;
      const height = image.height;
      console.log({ width });
      if (width === 500 && height === 400) {
        file.preview = URL.createObjectURL(file);
        newFiles.push(file);
        setOpen(true)
      }
      else {
        Swal.fire(
          'Opps',
          'Image dimantion must need to be 500 x 400',
          'error'
        ).then(() => {

        })
      }
      // do something with the image dimensions
    };
    setFiles(newFiles);

  }
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All images" value="1" />
            <Tab label="Hotel Images" value="2" />
            <Tab label="Rooms Images" value="3" />
            <Tab label="Facility Images" value="4" />
            <Tab label="Dining Images" value="5" />
            <Tab label="others Images" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 relative">
            <div class="-m-1 flex flex-wrap md:-m-2">
              {hotelInfo?.images?.map((items, index) => <div class="flex w-1/3 flex-wrap">
                <div class="w-full p-1 md:p-2 relative">
                  <img
                    alt="gallery"
                    class={`${blur ? "blur-lg" : ""} block h-full w-full rounded-lg object-cover object-center`}
                    src={items} />
                  <div className='absolute top-4 right-2'>
                    <div className='px-2 py-2 rounded-full text-light cursor-pointer dancing-label' style={{ background: '#001fff78' }} onClick={() => handleDeleteImage(items)}>
                      <DeleteIcon />
                    </div>
                  </div>
                </div>

              </div>)}


            </div>
            <div className='absolute bottom-0 right-0'>
              <label className='custom_red_color px-3 py-3 rounded-full text-light dancing-label' htmlFor='addImage'>
                <AddIcon />
              </label>
              <input type="file" id='addImage' onChange={handleFileOnChange} className='d-none' />
            </div>

            <AddImageModals open={open} handleClose={handleClose} id={hotelInfo?._id} files={files} />
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 relative">
            <div class="-m-1 flex flex-wrap md:-m-2">
              {hotelInfo?.HotelImages?.map((items, index) => <div class="flex w-1/3 flex-wrap">
                <div class="w-full p-1 md:p-2 relative">
                  <img
                    alt="gallery"
                    class={`${blur ? "blur-lg" : ""} block h-full w-full rounded-lg object-cover object-center`}
                    src={items} />
                  <div className='absolute top-4 right-2'>
                    <div className='px-2 py-2 rounded-full text-light cursor-pointer dancing-label' style={{ background: '#001fff78' }} onClick={() => handleDeleteImage(items)}>
                      <DeleteIcon />
                    </div>
                  </div>
                </div>

              </div>)}


            </div>
            <div className='absolute bottom-0 right-0'>
              <label className='custom_red_color px-3 py-3 rounded-full text-light dancing-label' htmlFor='addImage'>
                <AddIcon />
              </label>
              <input type="file" id='addImage' onChange={handleFileOnChange} className='d-none' />
            </div>

            <AddImageModals field={"HotelImages"} open={open} handleClose={handleClose} id={hotelInfo?._id} files={files} />
          </div>
        </TabPanel>
        <TabPanel value="3">
          <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 relative">
            <div class="-m-1 flex flex-wrap md:-m-2">
              {hotelInfo?.RoomsImages?.map((items, index) => <div class="flex w-1/3 flex-wrap">
                <div class="w-full p-1 md:p-2 relative">
                  <img
                    alt="gallery"
                    class={`${blur ? "blur-lg" : ""} block h-full w-full rounded-lg object-cover object-center`}
                    src={items} />
                  <div className='absolute top-4 right-2'>
                    <div className='px-2 py-2 rounded-full text-light cursor-pointer dancing-label' style={{ background: '#001fff78' }} onClick={() => handleDeleteImage(items)}>
                      <DeleteIcon />
                    </div>
                  </div>
                </div>

              </div>)}


            </div>
            <div className='absolute bottom-0 right-0'>
              <label className='custom_red_color px-3 py-3 rounded-full text-light dancing-label' htmlFor='addImage'>
                <AddIcon />
              </label>
              <input type="file" id='addImage' onChange={handleFileOnChange} className='d-none' />
            </div>

            <AddImageModals field={"RoomsImages"} open={open} handleClose={handleClose} id={hotelInfo?._id} files={files} />
          </div>
        </TabPanel>
        <TabPanel value="4">
          <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 relative">
            <div class="-m-1 flex flex-wrap md:-m-2">
              {hotelInfo?.FacilityImages?.map((items, index) => <div class="flex w-1/3 flex-wrap">
                <div class="w-full p-1 md:p-2 relative">
                  <img
                    alt="gallery"
                    class={`${blur ? "blur-lg" : ""} block h-full w-full rounded-lg object-cover object-center`}
                    src={items} />
                  <div className='absolute top-4 right-2'>
                    <div className='px-2 py-2 rounded-full text-light cursor-pointer dancing-label' style={{ background: '#001fff78' }} onClick={() => handleDeleteImage(items)}>
                      <DeleteIcon />
                    </div>
                  </div>
                </div>

              </div>)}


            </div>
            <div className='absolute bottom-0 right-0'>
              <label className='custom_red_color px-3 py-3 rounded-full text-light dancing-label' htmlFor='addImage'>
                <AddIcon />
              </label>
              <input type="file" id='addImage' onChange={handleFileOnChange} className='d-none' />
            </div>

            <AddImageModals field={"FacilityImages"} open={open} handleClose={handleClose} id={hotelInfo?._id} files={files} />
          </div>
        </TabPanel>
        <TabPanel value="5">
          <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 relative">
            <div class="-m-1 flex flex-wrap md:-m-2">
              {hotelInfo?.DiningImages?.map((items, index) => <div class="flex w-1/3 flex-wrap">
                <div class="w-full p-1 md:p-2 relative">
                  <img
                    alt="gallery"
                    class={`${blur ? "blur-lg" : ""} block h-full w-full rounded-lg object-cover object-center`}
                    src={items} />
                  <div className='absolute top-4 right-2'>
                    <div className='px-2 py-2 rounded-full text-light cursor-pointer dancing-label' style={{ background: '#001fff78' }} onClick={() => handleDeleteImage(items)}>
                      <DeleteIcon />
                    </div>
                  </div>
                </div>

              </div>)}


            </div>
            <div className='absolute bottom-0 right-0'>
              <label className='custom_red_color px-3 py-3 rounded-full text-light dancing-label' htmlFor='addImage'>
                <AddIcon />
              </label>
              <input type="file" id='addImage' onChange={handleFileOnChange} className='d-none' />
            </div>

            <AddImageModals field={"DiningImages"} open={open} handleClose={handleClose} id={hotelInfo?._id} files={files} />
          </div></TabPanel>
        <TabPanel value="6">
          <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 relative">
            <div class="-m-1 flex flex-wrap md:-m-2">
              {hotelInfo?.otherImages?.map((items, index) => <div class="flex w-1/3 flex-wrap">
                <div class="w-full p-1 md:p-2 relative">
                  <img
                    alt="gallery"
                    class={`${blur ? "blur-lg" : ""} block h-full w-full rounded-lg object-cover object-center`}
                    src={items} />
                  <div className='absolute top-4 right-2'>
                    <div className='px-2 py-2 rounded-full text-light cursor-pointer dancing-label' style={{ background: '#001fff78' }} onClick={() => handleDeleteImage(items)}>
                      <DeleteIcon />
                    </div>
                  </div>
                </div>

              </div>)}


            </div>
            <div className='absolute bottom-0 right-0'>
              <label className='custom_red_color px-3 py-3 rounded-full text-light dancing-label' htmlFor='addImage'>
                <AddIcon />
              </label>
              <input type="file" id='addImage' onChange={handleFileOnChange} className='d-none' />
            </div>

            <AddImageModals field={"otherImages"} open={open} handleClose={handleClose} id={hotelInfo?._id} files={files} />
          </div>
        </TabPanel>
      </TabContext>
    </Box>

  );
};

export default index;