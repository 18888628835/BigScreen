declare module MapDataTypes {
  export type PlanPlacement = {
    id: string;
    hasBuild: number;
    planBuild: number;
    nowBuild: number;
    planRelocationPopulation: number;
    hasRelocationPopulation: number;
    relocationCompletionRate: number;
    plannedProductionPopulation: number;
    hasProductionPopulation: number;
    productionProductionRate: number;
    type: number;
  };

  export type BuildProgress = {
    type: number;
    cityName: string[];
    relocationAgreementRate: number[];
    productionAgreementRate: number[];
  };

  export type LateSupport = {
    id: string;
    lateSupportPopulation: number;
    lateSupportProject: number;
    yearArrangeFund: number;
    directFundGiveRate: number;
    projectFundFinishRate: number;
    projectStartRate: number;
  };

  export type LateSupportEvaluation = {
    id: string;
    name: string;
    value: string;
    fundType: number;
  };

  export type LateSupportEvaluationVO = {
    lateSupportEvaluation: LateSupportEvaluation[];
    fundType: number;
  };

  export type RelocationNew = {
    id: number;
    serial: number;
    title: string;
    subTitle: string;
    summary: string;
    writer: string;
    publisher: string;
    coverPic?: any;
    hit: number;
    publishTime: Date;
    onTop: boolean;
    deptId?: number;
    orgId: number;
    external: boolean;
    internal: boolean;
    newsId: number;
    createdBy: string;
    createdDate: Date;
    lastModifiedBy?: any;
    lastModifiedDate?: any;
  };

  export type HydropowerStation = {
    id: string;
    stationName: string;
    totalInstalled: string;
    migrantInvest: string;
    planRelocationPopulation: string;
    productionPopulation: string;
    sandTable: string;
    isCarousel: boolean;
    imgUrl: string;
    projectType: number;
    buildState: number;
    category: number;
    projectId: number;
  };

  export type Data = {
    id: string;
    planPlacement: PlanPlacement[];
    buildProgress: BuildProgress[];
    cityTargetAssess: string[][];
    fundSupervise: string[][];
    lateSupport: LateSupport;
    lateSupportEvaluationVO: LateSupportEvaluationVO[];
    relocationNews: RelocationNew[];
    hydropowerStations: HydropowerStation[];
  };

  export type RootObject = {
    data: Data;
  };
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
