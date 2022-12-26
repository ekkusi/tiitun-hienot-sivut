import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * General info
 *
 *
 */
export interface General extends SanityDocument {
  _type: "general";

  /**
   * Logo image — `image`
   *
   *
   */
  logo_image: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Hero image — `image`
   *
   *
   */
  hero_image: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Hero text — `text`
   *
   *
   */
  hero_text: string;

  /**
   * Main description title — `string`
   *
   * This and the next text come under the hero in frontpage as a main description of the site
   */
  main_description_title: string;

  /**
   * Main description text — `text`
   *
   *
   */
  main_description_text: string;

  /**
   * Abstract section image — `image`
   *
   * This image will appear in the header before the abstract images section.
   */
  abstract_header_image: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Portrait section image — `image`
   *
   * This image will appear in the header before the portait images section.
   */
  portrait_header_image: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Flower section image — `image`
   *
   * This image will appear in the header before the flower images ssection.
   */
  flower_header_image: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Projects
 *
 *
 */
export interface Project extends SanityDocument {
  _type: "project";

  /**
   * Name — `string`
   *
   *
   */
  name: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug: { _type: "slug"; current: string };

  /**
   * Category — `string`
   *
   *
   */
  category: "abstract" | "portrait" | "flower";

  /**
   * Main image — `image`
   *
   *
   */
  main_image: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Youtube video URL — `url`
   *
   *
   */
  youtube_video_url?: string;

  /**
   * Image gallery — `array`
   *
   *
   */
  gallery?: Array<
    SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  >;
}

export type Documents = General | Project;
