export interface Iclass {
  code: number;
  shortDescription: string;
  description: string;
}

export interface Istatuscode {
  code: number;
  shortDescription: string;
  description: string;
}

export interface Ilanguage {
  classes: Iclass[];
  statuscodes: Istatuscode[];
}

export interface Itranslations {
  [propName: string]: Ilanguage;
}
