import { graphql } from "gatsby";

export const query = graphql`
  fragment SanityImageMetaData on SanityImageMetadata {
    dimensions {
      aspectRatio
      height
      width
    }
  }
  fragment SanityImage on SanityImage {
    asset {
      url
      gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
      metadata {
        ...SanityImageMetaData
      }
    }
  }
  fragment SanityProject on SanityProject {
    _id
    name
    slug {
      current
    }
    category
    main_image {
      ...SanityImage
    }
  }
  fragment SanityProjectFullInfo on SanityProject {
    ...SanityProject
    description
    youtube_video_url
    gallery {
      ...SanityImage
    }
  }
`;

export default query;
