
type PartnerCardProp = {
  img: string;
  img2x: string;
  webp: string;
  webp2x: string;
  alt: string;
}

const PartnerCard = (prop: PartnerCardProp) => {

  const {img, img2x, webp, webp2x, alt} = prop
  return (
    <article>
          <picture>
            <source
              type="image/webp"
              srcSet= {`${webp}, ${webp2x}`}
            />
            <img
              src={img}
              srcSet={img2x}
              width={300}
              height={200}
              alt={alt}
            />
          </picture>
    </article>
  )
}

export default PartnerCard;
