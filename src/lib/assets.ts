const cdn = (file: string) =>
  `/assets/cdn.prod.website-files.com/5ebfff57f6222da643c230ce/${file}`;

export const asset = {
  logo: cdn("5ec000d0531890161dfddddb_Final%20Logo.png"),
  logoAlt: cdn("5ec0b702b688ad255215571c_Alternative%20Final%20Logo.svg"),
  tiktokJake: cdn("666c5f85c400739f0459d3e3_TikTok%20Jake.png"),
  headshot: cdn("666c5ff3b5889b3693a09f83_Jake%20Headshot%202.png"),
  headshotSrcSet: `${cdn("666c5ff3b5889b3693a09f83_Jake%20Headshot%202-p-500.png")} 500w, ${cdn("666c5ff3b5889b3693a09f83_Jake%20Headshot%202.png")} 587w`,
  favicon: cdn("5f3f246c950c519f9eb297fd_Favicon.png"),
  webclip: cdn("5f3f24702adb975118be644d_Webclip.png"),
  og: "/media/og.jpg",
} as const;
