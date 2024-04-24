const Fonts = require('./fonts.js').default;
const Colors = require('./colors.js').default;

const typography = {
  'body': {
    fontFamily: Fonts.SFProTextRegular,
    fontSize: 15,
    lineHeight: 20,
    color: Colors.dark['500'],
  },
  'body-b': {
    fontFamily: Fonts.SFProTextBold,
    fontSize: 15,
    lineHeight: 20,
    color: Colors.dark['500'],
  },
  'body-m': {
    fontFamily: Fonts.SFProTextSemibold,
    fontSize: 15,
    lineHeight: 20,
    color: Colors.dark['500'],
  },
  'body-s': {
    fontFamily: Fonts.SFProTextMedium,
    fontSize: 15,
    color: Colors.dark['500'],
    lineHeight: 20,
  },
  'body-2': {
    fontFamily: Fonts.SFProTextRegular,
    fontSize: 16,
    color: Colors.dark['500'],
    lineHeight: 22,
  },
  'body-2-b': {
    fontFamily: Fonts.SFProTextBold,
    fontSize: 16,
    lineHeight: 22,
    color: Colors.dark['500'],
  },
  'body-2-m': {
    fontFamily: Fonts.SFProTextSemibold,
    fontSize: 16,
    lineHeight: 22,
    color: Colors.dark['500'],
  },
  'body-2-s': {
    fontFamily: Fonts.SFProTextMedium,
    fontSize: 16,
    lineHeight: 22,
    color: Colors.dark['500'],
  },
  'callout': {
    fontFamily: Fonts.SFProTextRegular,
    fontSize: 14,
    lineHeight: 20,
    color: Colors.dark['500'],
  },
  'callout-b': {
    fontFamily: Fonts.SFProTextSemibold,
    fontSize: 14,
    lineHeight: 20,
    color: Colors.dark['500'],
  },
  'callout-m': {
    fontFamily: Fonts.SFProTextMedium,
    fontSize: 14,
    lineHeight: 20,
    color: Colors.dark['500'],
  },
  'callout-s': {
    fontFamily: Fonts.SFProTextSemibold,
    fontSize: 14,
    lineHeight: 20,
    color: Colors.dark['500'],
  },
  'subhead': {
    fontFamily: Fonts.SFProTextRegular,
    fontSize: 13,
    lineHeight: 18,
    color: Colors.dark['500'],
  },
  'subhead-b': {
    fontFamily: Fonts.SFProTextBold,
    fontSize: 13,
    lineHeight: 18,
    color: Colors.dark['500'],
  },
  'subhead-m': {
    fontFamily: Fonts.SFProTextSemibold,
    fontSize: 13,
    lineHeight: 18,
    color: Colors.dark['500'],
  },
  'subhead-s': {
    fontFamily: Fonts.SFProTextMedium,
    fontSize: 13,
    lineHeight: 18,
    color: Colors.dark['500'],
  },
  'footnote': {
    fontFamily: Fonts.SFProTextRegular,
    fontSize: 12,
    lineHeight: 16,
    color: Colors.dark['500'],
  },
  'footnote-b': {
    fontFamily: Fonts.SFProTextBold,
    fontSize: 12,
    lineHeight: 16,
    color: Colors.dark['500'],
  },
  'footnote-m': {
    fontFamily: Fonts.SFProTextSemibold,
    fontSize: 12,
    lineHeight: 16,
    color: Colors.dark['500'],
  },
  'footnote-s': {
    fontFamily: Fonts.SFProTextMedium,
    fontSize: 12,
    lineHeight: 16,
    color: Colors.dark['500'],
  },
  'caption': {
    fontFamily: Fonts.SFProTextRegular,
    fontSize: 11,
    lineHeight: 13,
    color: Colors.dark['500'],
  },
  'caption-b': {
    fontFamily: Fonts.SFProTextBold,
    fontSize: 11,
    lineHeight: 13,
    color: Colors.dark['500'],
  },
  'caption-m': {
    fontFamily: Fonts.SFProTextSemibold,
    fontSize: 11,
    lineHeight: 13,
    color: Colors.dark['500'],
  },
  'caption-s': {
    fontFamily: Fonts.SFProTextMedium,
    fontSize: 11,
    lineHeight: 13,
    color: Colors.dark['500'],
  },
  'headline': {
    fontFamily: Fonts.SFProTextBold,
    fontSize: 16,
    lineHeight: 22,
    color: Colors.dark['500'],
  },
  'title-3': {
    fontFamily: Fonts.SFProTextRegular,
    fontSize: 18,
    lineHeight: 23,
    color: Colors.dark['500'],
  },
  'title-3-b': {
    fontFamily: Fonts.SFProTextBold,
    fontSize: 18,
    lineHeight: 23,
    color: Colors.dark['500'],
  },
  'title-3-m': {
    fontFamily: Fonts.SFProTextSemibold,
    fontSize: 18,
    lineHeight: 23,
    color: Colors.dark['500'],
  },
  'title-3-s': {
    fontFamily: Fonts.SFProTextMedium,
    fontSize: 18,
    lineHeight: 23,
    color: Colors.dark['500'],
  },
  'title-2': {
    fontFamily: Fonts.SFProTextRegular,
    fontSize: 22,
    lineHeight: 28,
    color: Colors.dark['500'],
  },
  'title-2-b': {
    fontFamily: Fonts.SFProTextBold,
    fontSize: 22,
    lineHeight: 28,
    color: Colors.dark['500'],
  },
  'title-2-m': {
    fontFamily: Fonts.SFProTextSemibold,
    fontSize: 22,
    lineHeight: 28,
    color: Colors.dark['500'],
  },
  'title-2-s': {
    fontFamily: Fonts.SFProTextMedium,
    fontSize: 22,
    lineHeight: 28,
    color: Colors.dark['500'],
  },
  'title-1': {
    fontFamily: Fonts.SFProTextRegular,
    fontSize: 28,
    lineHeight: 34,
    color: Colors.dark['500'],
  },
  'title-1-b': {
    fontFamily: Fonts.SFProTextBold,
    fontSize: 28,
    lineHeight: 34,
    color: Colors.dark['500'],
  },
  'title-1-m': {
    fontFamily: Fonts.SFProTextSemibold,
    fontSize: 28,
    lineHeight: 34,
    color: Colors.dark['500'],
  },
  'title-1-s': {
    fontFamily: Fonts.SFProTextMedium,
    fontSize: 28,
    lineHeight: 34,
    color: Colors.dark['500'],
  },

  'ds': {
    shadowColor: '#000', // Màu bóng đổ, rgba(0, 0, 0, 0.04)
    shadowOffset: {
      width: 0, // tương đương với giá trị X của CSS
      height: 55, // tương đương với giá trị Y của CSS
    },
    shadowOpacity: 0.04, // Độ trong suốt của bóng đổ
    shadowRadius: 110, // Độ mịn của bóng đổ, tương đương với 'blur-radius' trong CSS
    elevation: 22, // Đây là thuộc tính chỉ hoạt động trên Android để thêm bóng đổ
  },
};

exports.default = typography;
