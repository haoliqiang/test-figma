
    import React from 'react';

 
    import {Column,Stack,Img,Text} from 'components'
  import Header1 from 'components/Header/Header1'
  

    

    const 404Page = () => {
      

      

      return (<>
        <Column
    className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] lg:pb-[234px] xl:pb-[293px] 2xl:pb-[330px] 3xl:pb-[396px] w-[100%]"
        
  
  
    
    
  

    
  ><Header1 
  className="w-[100%]"
  
  
  
    
    
  
  
  /><Stack
    className="bg-white_A700 lg:h-[171px] xl:h-[214px] 2xl:h-[241px] 3xl:h-[289px] lg:mt-[189px] xl:mt-[236px] 2xl:mt-[266px] 3xl:mt-[319px] lg:w-[170px] xl:w-[213px] 2xl:w-[240px] 3xl:w-[288px]"
      
  
  
    
    
  

    
  ><Img
        src=
                  "images/img_group411_216X240.svg"
              
        className="bottom-[0] Group431"
        
  
  
    
    
  
  
        
              alt="Group411"
      /><Text
    className="absolute bottom-[4%] font-normal inset-x-[0] mx-[auto] not-italic text-bluegray_800 w-[max-content]"
     
  
  
    
    variant="body8"
  

    
  >抱歉，您访问的页面不存在<br /></Text></Stack></Column>

        
      </>);
    };

    export default 404Page;
  