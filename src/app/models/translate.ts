export interface TranslateReq {
  q: string[];
  target: string;
}
export interface TrandlateRes {
  data: {
    translations: TrandlatedObj[];
  };
}
export interface TrandlatedObj {
  translatedText: string;
  detectedSourceLanguage: string;
}
