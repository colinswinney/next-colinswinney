import Image from 'next/image'
import { ImageWrapEl } from './styles/image-wrap'

const ImageWrap = ({imageObj, maxWidth, transparent, grayscale, className, children}) => {

    return (
        <ImageWrapEl className={className} maxWidth={maxWidth} transparent={transparent} grayscale={grayscale}>

            {children ? 
                children 
                :
                imageObj.node ? 
                    <Image
                        src={imageObj.node.mediaItemUrl}
                        height={imageObj.node.mediaDetails.height}
                        width={imageObj.node.mediaDetails.width}
                        alt={imageObj.node.title}
                    />
                    :
                    <Image
                        src={imageObj.mediaItemUrl}
                        height={imageObj.mediaDetails.height}
                        width={imageObj.mediaDetails.width}
                        alt={imageObj.title}
                    />
            }
            
        </ImageWrapEl>
    )
}

export default ImageWrap