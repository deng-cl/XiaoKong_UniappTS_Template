export function initFonts() {
    const robotoFonts = [
        {family: "RobotoRegular", source: "url('/static/fonts/Roboto-Regular.ttf')"},
        {family: "RobotoMedium", source: "url('/static/fonts/Roboto-Medium.ttf')"},
        {family: "RobotoSemiBold", source: "url('/static/fonts/Roboto-SemiBold.ttf')"},
        {family: "RobotoBold", source: "url('/static/fonts/Roboto-Bold.ttf')"},
        {family: "RobotoExtraBold", source: "url('/static/fonts/Roboto-ExtraBold.ttf')"},
    ];

    const fonts = [...robotoFonts];

    fonts.forEach((font) => {
        uni.loadFontFace({
            family: font.family,
            source: font.source,
            global: true,
        });
    });
}

type RobotoFonts = "RobotoRegular" | "RobotoMedium" | "RobotoSemiBold" | "RobotoBold" | "RobotoExtraBold";
export type Fonts = RobotoFonts;
