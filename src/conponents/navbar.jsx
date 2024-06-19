import React from "react";
import {
 
  Typography,
  

} from "@material-tailwind/react";
import {Card, CardBody, Image, Button, Slider} from "@nextui-org/react";
 
export function NavbarDefault() {

  return (

    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">

    <div class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-blue-600 border border-light-blue-600 rounded-full bottom-4 left-1/2 dark:bg-blue-800 dark:border-blue-600">
        <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
            <button data-tooltip-target="tooltip-home" type="button" class="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-light-blue-600 dark:hover:bg-gray-800 group">
                <svg class="w-5 h-5 mb-1 text-gray-50 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                </svg>
                <span class="sr-only">Home</span>
            </button>
            <div id="tooltip-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Home
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button data-tooltip-target="tooltip-wallet" type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-light-blue-600 dark:hover:bg-gray-800 group">
            <svg class="w-[31px] h-[31px] text-gray-50 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm10 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-8-5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm1.942 4a3 3 0 0 0-2.847 2.051l-.044.133-.004.012c-.042.126-.055.167-.042.195.006.013.02.023.038.039.032.025.08.064.146.155A1 1 0 0 0 6 17h6a1 1 0 0 0 .811-.415.713.713 0 0 1 .146-.155c.019-.016.031-.026.038-.04.014-.027 0-.068-.042-.194l-.004-.012-.044-.133A3 3 0 0 0 10.059 14H7.942Z" clip-rule="evenodd"/>
            </svg>

                <span class="sr-only">Wallet</span>
            </button>
            <div id="tooltip-wallet" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Wallet
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <div class="flex items-center justify-center">
                <button data-tooltip-target="tooltip-new" type="button" class="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                    <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    <span class="sr-only">New item</span>
                </button>
            </div>
            <div id="tooltip-new" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Create new item
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button data-tooltip-target="tooltip-settings" type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-light-blue-600 dark:hover:bg-gray-800 group">
                <svg class="w-5 h-5 mb-1 text-gray-50 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                </svg>
                <span class="sr-only">Settings</span>
            </button>
            <div id="tooltip-settings" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Settings
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button href="" data-tooltip-target="tooltip-profile" type="button" class="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-light-blue-600 dark:hover:bg-gray-800 group">
                <svg class="w-5 h-5 mb-1 text-gray-50 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>
                <span class="sr-only">Profile</span>
            </button>
            <div id="tooltip-profile" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Profile
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    </div>

    <div className="container px-5 py-24 mx-auto  flex-wrap">
    <Card
      isBlurred
      className="border-none bg-gray-600/30 dark:bg-default-100/50 max-w-[1080px] flex w-full mb-20 flex-wrap "
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover "
              height={200}
              isBlurred
              shadow="lg"
              src="https://scontent.fcjs3-2.fna.fbcdn.net/v/t39.30808-6/422806449_395990756439998_334528592392295799_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFA5htm14kTtJRncK67vxDVsXpxUbqUMdGxenFRupQx0cr1W-j95IQW_uan9qGYnui0FFr4rNA3jQcsqo34pJnR&_nc_ohc=h_ujW5cZ5rMQ7kNvgHibroL&_nc_ht=scontent.fcjs3-2.fna&oh=00_AYAC_xNsuUJ04AujWGFkIhD364ZyXGjzuHN5AKqO1r39bQ&oe=667779F7"
              max-width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-4xl text-gray-50">Hi, I'm Bladimir👋</h3>
                <p className="text-6xl font-semibold text-light-blue-400">BackEnd Developer</p>
                <h1 className="text-large font-medium mt-2 text-gray-50">It's not witchcraft, it's technology.</h1>
                <div className="flex gap-4 items-center mt-2">
                  <Button color="primary" variant="ghost" className="text-large font-medium mt-2 text-gray-50">
                   cv
                  <svg class="w-[31px] h-[31px] text-gray-50 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z" clip-rule="evenodd"/>
                  </svg>

                  </Button>    
                  <Button className="text-large font-medium mt-2 bg-gradient-to-tr from-teal-400 to-light-blue-600 text-white shadow-lg">
                    Portfolio
                    <svg class="w-[31px] h-[31px] text-gray-50 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 .087.586l2.977-7.937A1 1 0 0 1 6 10h12V9a2 2 0 0 0-2-2h-4.532l-1.9-2.28A2 2 0 0 0 8.032 4H4Zm2.693 8H6.5l-3 8H18l3-8H6.693Z" clip-rule="evenodd"/>
                  </svg>
 
                  </Button>
              </div>
              </div>
            
            </div>

        

         
          </div>
          
        </div>
        
      </CardBody>
    </Card>
    <Typography variant="h2" color="blue-gray" className="mb-2 text-light-blue-600">
        ABOUT ME
    </Typography>
    <Typography color="gray" className="font-normal text-gray-50" id='doc'>
      Can you help me out? you will get a lot of free exposure doing this
      can my weDDDbsite be in english?. There is too much white space do less
      with more, so that will be a conversation piece can you rework to make
      the pizza look more delicious other agencies charge much lesser can
      you make the blue bluer?.cambios I think we need to starssst from scratch can my
      website be in english?, yet make it sexy i&apos;ll pay you in a week
      we don&apos;t need to pay upfront i hope you understand can you make
      it stand out more?. Make the font bigger can you help me out? you will
      get a lot of free exposure doing this that&apos;s going to be a chunk
      of change other agencies charge much lesser. Are you busy this
      weekend? I have a new project with a tight deadline that&apos;s going
      to be a chunk of change. There are more projects lined up charge extra
      the next time.
    </Typography>

    <Typography color="gray" className="font-normal text-gray-50" id='doc'>
      Can you help me out? you will get a lot of free exposure doing this
      can my website be in english?. There is too much white space do less
      with more, so that will be a conversation piece can you rework to make
      the pizza look more delicious other agencies charge much lesser can
      you make the blue bluer?. I think we need to start from scratch can my
      website be in english?, yet make it sexy i&apos;ll pay you in a week
      we don&apos;t need to pay upfront i hope you understand can you make
      it stand out more?. Make the font bigger can you help me out? you will
      get a lot of free exposure doing this that&apos;s going to be a chunk
      of change other agencies charge much lesser. Are you busy this
      weekend? I have a new project with a tight deadline that&apos;s going
      to be a chunk of change. There are more projects lined up charge extra
      the next time.
    </Typography>

    <Typography color="gray" className="font-normal text-gray-50" id='doc'>
      Can you help me out? you will get a lot of free exposure doing this
      can my website be in english?. There is too much white space do less
      with more, so that will be a conversation piece can you rework to make
      the pizza look more delicious other agencies charge much lesser can
      you make the blue bluer?. I think we need to start from scratch can my
      website be in english?, yet make it sexy i&apos;ll pay you in a week
      we don&apos;t need to pay upfront i hope you understand can you make
      it stand out more?. Make the font bigger can you help me out? you will
      get a lot of free exposure doing this that&apos;s going to be a chunk
      of change other agencies charge much lesser. Are you busy this
      weekend? I have a new project with a tight deadline that&apos;s going
      to be a chunk of change. There are more projects lined up charge extra
      the next time.
    </Typography>

    <Typography color="gray" className="font-normal text-gray-50" id='perfiles'>
      Can you help me out? you will get a lot of free exposure doing this
      can my website be in english?. There is too much white space do less
      with more, so that will be a conversation piece can you rework to make
      the pizza look more delicious other agencies charge much lesser can
      you make the blue bluer?. I think we need to start from scratch can my
      website be in english?, yet make it sexy i&apos;ll pay you in a week
      we don&apos;t need to pay upfront i hope you understand can you make
      it stand out more?. Make the font bigger can you help me out? you will
      get a lot of free exposure doing this that&apos;s going to be a chunk
      of change other agencies charge much lesser. Are you busy this
      weekend? I have a new project with a tight deadline that&apos;s going
      to be a chunk of change. There are more projects lined up charge extra
      the next time.
    </Typography>
  </div>
  </div>
    
  );
}
export default NavbarDefault