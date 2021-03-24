import React from 'react'
import Image from '../../util/Components/Image'

const ErrorView: React.FC = () => {
    return (
        <div>
            <Image
                altText='well that is something'
                imgUrl=''
                className='error-image'
            />
            <h3>Well this is embarrassing...</h3>
            <p>
                Seems someone did something and screwed up my website. Seriously
                you just can't find good help these days. Tell you what, if
                refreshing the page doesn't fix this, go refresh your drink
                instead and things should be better when you get back.
            </p>
        </div>
    )
}

export default ErrorView
