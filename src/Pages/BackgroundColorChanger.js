import React from 'react';


export const BackgroundColorChanger = () =>{
    const { colorname } = useParams();
    return(
        <main style={{ height: '100vh', backgroundColor: colorname }}>
      Background Color Changer
    </main>
       
    )
}
