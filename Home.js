import React from 'react'
import Header from './Header'
import $ from "jquery"

function Home() {
    let imgCounter = 0
    const imgArr = ['https://m.economictimes.com/thumb/msid-68748254,width-1200,height-900,resizemode-4,imgsize-675057/bank-1.jpg',
        'https://www.dialabank.com/wp-content/uploads/2020/06/bank-3821.jpg',
        'https://media.istockphoto.com/photos/bank-3d-illustration-picture-id1089881960?k=6&m=1089881960&s=612x612&w=0&h=yd0M208-DLuPulm4y8RcToAD6SW_pFaH3kvB9K2ZzEM=',
        'https://aserbritishcentre.com/wp-content/uploads/2020/10/istockphoto-640267784-612x612-1.jpg'
    ]
    let img = document.querySelector('.slider');
    function slide() {
        $('.slider').attr('src', imgArr[imgCounter]);
        if (imgCounter === imgArr.length - 1) {
            imgCounter = 0;
        }
        imgCounter = imgCounter + 1;
        setTimeout(slide, 4000);
    }

    slide();
    return (
        <div>
            <Header />
            <img className='slider' id='slider'
                width="100%"
                height="710px"
                src='' />

        </div>
    )
}

export default Home
