/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** An arbitrary-precision Decimal type */
  Decimal: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type AffectedRows = {
  __typename?: 'AffectedRows';
  count: Scalars['Int']['output'];
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

/**
 * @@allow('read', true)
 * @@allow('create,read,update,delete', auth().roles?[key == 'ADMIN'])
 */
export type Campaign = {
  __typename?: 'Campaign';
  bannerFile?: Maybe<File>;
  bannerFileKey?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  products?: Maybe<Array<TiktokProduct>>;
  updatedAt: Scalars['DateTime']['output'];
};


/**
 * @@allow('read', true)
 * @@allow('create,read,update,delete', auth().roles?[key == 'ADMIN'])
 */
export type CampaignProductsArgs = {
  cursor?: InputMaybe<TiktokProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<TiktokProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TiktokProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TiktokProductWhereInput>;
};

export type CampaignCountAggregate = {
  __typename?: 'CampaignCountAggregate';
  _all: Scalars['Int']['output'];
  bannerFileKey: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type CampaignCreateInput = {
  bannerFile?: InputMaybe<FileCreateNestedOneWithoutCampaignsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  products?: InputMaybe<TiktokProductCreateNestedManyWithoutCampaingsInput>;
};

export type CampaignCreateNestedManyWithoutProductsInput = {
  connect?: InputMaybe<Array<CampaignWhereUniqueInput>>;
  create?: InputMaybe<Array<CampaignCreateWithoutProductsInput>>;
};

export type CampaignCreateWithoutProductsInput = {
  bannerFile?: InputMaybe<FileCreateNestedOneWithoutCampaignsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CampaignListRelationFilter = {
  every?: InputMaybe<CampaignWhereInput>;
  none?: InputMaybe<CampaignWhereInput>;
  some?: InputMaybe<CampaignWhereInput>;
};

export type CampaignMaxAggregate = {
  __typename?: 'CampaignMaxAggregate';
  bannerFileKey?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CampaignMinAggregate = {
  __typename?: 'CampaignMinAggregate';
  bannerFileKey?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CampaignOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CampaignOrderByWithRelationInput = {
  bannerFile?: InputMaybe<FileOrderByWithRelationInput>;
  bannerFileKey?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  products?: InputMaybe<TiktokProductOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum CampaignScalarFieldEnum {
  BannerFileKey = 'bannerFileKey',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type CampaignUpdateInput = {
  bannerFile?: InputMaybe<FileUpdateOneWithoutCampaignsNestedInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<TiktokProductUpdateManyWithoutCampaingsNestedInput>;
};

export type CampaignUpdateManyWithoutProductsNestedInput = {
  connect?: InputMaybe<Array<CampaignWhereUniqueInput>>;
  create?: InputMaybe<Array<CampaignCreateWithoutProductsInput>>;
  delete?: InputMaybe<Array<CampaignWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<CampaignWhereUniqueInput>>;
  update?: InputMaybe<Array<CampaignUpdateWithWhereUniqueWithoutProductsInput>>;
};

export type CampaignUpdateWithWhereUniqueWithoutProductsInput = {
  data: CampaignUpdateWithoutProductsInput;
  where: CampaignWhereUniqueInput;
};

export type CampaignUpdateWithoutProductsInput = {
  bannerFile?: InputMaybe<FileUpdateOneWithoutCampaignsNestedInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CampaignWhereInput = {
  AND?: InputMaybe<Array<CampaignWhereInput>>;
  NOT?: InputMaybe<Array<CampaignWhereInput>>;
  OR?: InputMaybe<Array<CampaignWhereInput>>;
  bannerFile?: InputMaybe<FileNullableRelationFilter>;
  bannerFileKey?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<TiktokProductListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CampaignWhereUniqueInput = {
  AND?: InputMaybe<Array<CampaignWhereInput>>;
  NOT?: InputMaybe<Array<CampaignWhereInput>>;
  OR?: InputMaybe<Array<CampaignWhereInput>>;
  bannerFile?: InputMaybe<FileNullableRelationFilter>;
  bannerFileKey?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<TiktokProductListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

/**
 * @@allow('read', true)
 * @@allow('create,read,update,delete', auth().roles?[key == 'ADMIN'])
 */
export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  imageFile?: Maybe<File>;
  imageFileKey?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  products?: Maybe<Array<TiktokProduct>>;
  updatedAt: Scalars['DateTime']['output'];
};


/**
 * @@allow('read', true)
 * @@allow('create,read,update,delete', auth().roles?[key == 'ADMIN'])
 */
export type CategoryProductsArgs = {
  cursor?: InputMaybe<TiktokProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<TiktokProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TiktokProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TiktokProductWhereInput>;
};

export type CategoryCountAggregate = {
  __typename?: 'CategoryCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  imageFileKey: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type CategoryCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<FileCreateNestedOneWithoutCategoriesInput>;
  name: Scalars['String']['input'];
  products?: InputMaybe<TiktokProductCreateNestedManyWithoutCategoriesInput>;
};

export type CategoryCreateNestedManyWithoutProductsInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  create?: InputMaybe<Array<CategoryCreateWithoutProductsInput>>;
};

export type CategoryCreateWithoutProductsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<FileCreateNestedOneWithoutCategoriesInput>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryListRelationFilter = {
  every?: InputMaybe<CategoryWhereInput>;
  none?: InputMaybe<CategoryWhereInput>;
  some?: InputMaybe<CategoryWhereInput>;
};

export type CategoryMaxAggregate = {
  __typename?: 'CategoryMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imageFileKey?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryMinAggregate = {
  __typename?: 'CategoryMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imageFileKey?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  imageFile?: InputMaybe<FileOrderByWithRelationInput>;
  imageFileKey?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  products?: InputMaybe<TiktokProductOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum CategoryScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  ImageFileKey = 'imageFileKey',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type CategoryUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<FileUpdateOneWithoutCategoriesNestedInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<TiktokProductUpdateManyWithoutCategoriesNestedInput>;
};

export type CategoryUpdateManyWithoutProductsNestedInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  create?: InputMaybe<Array<CategoryCreateWithoutProductsInput>>;
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoryUpdateWithWhereUniqueWithoutProductsInput>>;
};

export type CategoryUpdateWithWhereUniqueWithoutProductsInput = {
  data: CategoryUpdateWithoutProductsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithoutProductsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<FileUpdateOneWithoutCategoriesNestedInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  imageFile?: InputMaybe<FileNullableRelationFilter>;
  imageFileKey?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<TiktokProductListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<FileNullableRelationFilter>;
  imageFileKey?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<TiktokProductListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CreateTiktokProductFromIdInput = {
  affiliateLink?: InputMaybe<Scalars['String']['input']>;
  commissionPercent?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['String']['input'];
};

export type CreateTiktokProductFromLinkInput = {
  affiliateLink?: InputMaybe<Scalars['String']['input']>;
  commissionPercent?: InputMaybe<Scalars['Int']['input']>;
  link: Scalars['String']['input'];
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type DecimalNullableFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type EnumRoleKeyFilter = {
  equals?: InputMaybe<RoleKey>;
  in?: InputMaybe<Array<RoleKey>>;
  not?: InputMaybe<NestedEnumRoleKeyFilter>;
  notIn?: InputMaybe<Array<RoleKey>>;
};

/**
 * @@allow('create,read', true)
 * @@allow('update,delete', auth().roles?[key == 'ADMIN'])
 */
export type File = {
  __typename?: 'File';
  campaigns: Array<Campaign>;
  categories: Array<Category>;
  createdAt: Scalars['DateTime']['output'];
  filename: Scalars['String']['output'];
  key: Scalars['String']['output'];
  mimetype: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/**
 * @@allow('create,read', true)
 * @@allow('update,delete', auth().roles?[key == 'ADMIN'])
 */
export type FileCampaignsArgs = {
  cursor?: InputMaybe<CampaignWhereUniqueInput>;
  distinct?: InputMaybe<Array<CampaignScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CampaignOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CampaignWhereInput>;
};


/**
 * @@allow('create,read', true)
 * @@allow('update,delete', auth().roles?[key == 'ADMIN'])
 */
export type FileCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};

export type FileAvgAggregate = {
  __typename?: 'FileAvgAggregate';
  size?: Maybe<Scalars['Float']['output']>;
};

export type FileCountAggregate = {
  __typename?: 'FileCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  filename: Scalars['Int']['output'];
  key: Scalars['Int']['output'];
  mimetype: Scalars['Int']['output'];
  size: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type FileCreateInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  mimetype?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type FileCreateNestedOneWithoutCampaignsInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutCampaignsInput>;
  create?: InputMaybe<FileCreateWithoutCampaignsInput>;
};

export type FileCreateNestedOneWithoutCategoriesInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutCategoriesInput>;
  create?: InputMaybe<FileCreateWithoutCategoriesInput>;
};

export type FileCreateOrConnectWithoutCampaignsInput = {
  create: FileCreateWithoutCampaignsInput;
  where: FileWhereUniqueInput;
};

export type FileCreateOrConnectWithoutCategoriesInput = {
  create: FileCreateWithoutCategoriesInput;
  where: FileWhereUniqueInput;
};

export type FileCreateWithoutCampaignsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  mimetype?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FileCreateWithoutCategoriesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  mimetype?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FileMaxAggregate = {
  __typename?: 'FileMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  mimetype?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FileMinAggregate = {
  __typename?: 'FileMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  mimetype?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FileNullableRelationFilter = {
  is?: InputMaybe<FileWhereInput>;
  isNot?: InputMaybe<FileWhereInput>;
};

export type FileOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  filename?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  mimetype?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum FileScalarFieldEnum {
  CreatedAt = 'createdAt',
  Filename = 'filename',
  Key = 'key',
  Mimetype = 'mimetype',
  Size = 'size',
  UpdatedAt = 'updatedAt'
}

export type FileSumAggregate = {
  __typename?: 'FileSumAggregate';
  size?: Maybe<Scalars['Int']['output']>;
};

export type FileUpdateInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  mimetype?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type FileUpdateOneWithoutCampaignsNestedInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutCampaignsInput>;
  create?: InputMaybe<FileCreateWithoutCampaignsInput>;
  delete?: InputMaybe<FileWhereInput>;
  disconnect?: InputMaybe<FileWhereInput>;
  update?: InputMaybe<FileUpdateToOneWithWhereWithoutCampaignsInput>;
};

export type FileUpdateOneWithoutCategoriesNestedInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutCategoriesInput>;
  create?: InputMaybe<FileCreateWithoutCategoriesInput>;
  delete?: InputMaybe<FileWhereInput>;
  disconnect?: InputMaybe<FileWhereInput>;
  update?: InputMaybe<FileUpdateToOneWithWhereWithoutCategoriesInput>;
};

export type FileUpdateToOneWithWhereWithoutCampaignsInput = {
  data: FileUpdateWithoutCampaignsInput;
  where?: InputMaybe<FileWhereInput>;
};

export type FileUpdateToOneWithWhereWithoutCategoriesInput = {
  data: FileUpdateWithoutCategoriesInput;
  where?: InputMaybe<FileWhereInput>;
};

export type FileUpdateWithoutCampaignsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  mimetype?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FileUpdateWithoutCategoriesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  mimetype?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FileWhereInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  filename?: InputMaybe<StringFilter>;
  key?: InputMaybe<StringFilter>;
  mimetype?: InputMaybe<StringFilter>;
  size?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FileWhereUniqueInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  filename?: InputMaybe<StringFilter>;
  key?: InputMaybe<Scalars['String']['input']>;
  mimetype?: InputMaybe<StringFilter>;
  size?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type JsonNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['JSON']['input']>>;
  has?: InputMaybe<Scalars['JSON']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['JSON']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['JSON']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCampaign: Campaign;
  createCategory: Category;
  createFile: File;
  createTiktokProductFromId: TiktokProduct;
  createTiktokProductFromLink: TiktokProduct;
  deleteCampaign: Campaign;
  deleteCampaigns: AffectedRows;
  deleteCategories: AffectedRows;
  deleteCategory: Category;
  deleteFile: File;
  deleteFiles: AffectedRows;
  deleteTiktokProduct: TiktokProduct;
  deleteTiktokProducts: AffectedRows;
  deleteTiktokSeller: TiktokSeller;
  deleteTiktokSellers: AffectedRows;
  registerUserRole: Scalars['Boolean']['output'];
  updateCampaign: Campaign;
  updateCategory: Category;
  updateFile: File;
};


export type MutationCreateCampaignArgs = {
  data: CampaignCreateInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateFileArgs = {
  data: FileCreateInput;
};


export type MutationCreateTiktokProductFromIdArgs = {
  data: CreateTiktokProductFromIdInput;
};


export type MutationCreateTiktokProductFromLinkArgs = {
  data: CreateTiktokProductFromLinkInput;
};


export type MutationDeleteCampaignArgs = {
  where: CampaignWhereUniqueInput;
};


export type MutationDeleteCampaignsArgs = {
  where?: InputMaybe<CampaignWhereInput>;
};


export type MutationDeleteCategoriesArgs = {
  where?: InputMaybe<CategoryWhereInput>;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteFileArgs = {
  where: FileWhereUniqueInput;
};


export type MutationDeleteFilesArgs = {
  where?: InputMaybe<FileWhereInput>;
};


export type MutationDeleteTiktokProductArgs = {
  where: TiktokProductWhereUniqueInput;
};


export type MutationDeleteTiktokProductsArgs = {
  where?: InputMaybe<TiktokProductWhereInput>;
};


export type MutationDeleteTiktokSellerArgs = {
  where: TiktokSellerWhereUniqueInput;
};


export type MutationDeleteTiktokSellersArgs = {
  where?: InputMaybe<TiktokSellerWhereInput>;
};


export type MutationRegisterUserRoleArgs = {
  data: RegisterUserRoleInput;
};


export type MutationUpdateCampaignArgs = {
  data: CampaignUpdateInput;
  where: CampaignWhereUniqueInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateFileArgs = {
  data: FileUpdateInput;
  where: FileWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type NestedDecimalNullableFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type NestedEnumRoleKeyFilter = {
  equals?: InputMaybe<RoleKey>;
  in?: InputMaybe<Array<RoleKey>>;
  not?: InputMaybe<NestedEnumRoleKeyFilter>;
  notIn?: InputMaybe<Array<RoleKey>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Query = {
  __typename?: 'Query';
  campaign?: Maybe<Campaign>;
  campaignCount: Scalars['Int']['output'];
  campaigns: Array<Campaign>;
  categories: Array<Category>;
  category?: Maybe<Category>;
  categoryCount: Scalars['Int']['output'];
  file?: Maybe<File>;
  fileCount: Scalars['Int']['output'];
  files: Array<File>;
  me?: Maybe<User>;
  tiktokProduct?: Maybe<TiktokProduct>;
  tiktokProductCount: Scalars['Int']['output'];
  tiktokProducts: Array<TiktokProduct>;
  tiktokSeller?: Maybe<TiktokSeller>;
  tiktokSellerCount: Scalars['Int']['output'];
  tiktokSellers: Array<TiktokSeller>;
  user?: Maybe<User>;
  userCount: Scalars['Int']['output'];
  users: Array<User>;
};


export type QueryCampaignArgs = {
  where: CampaignWhereUniqueInput;
};


export type QueryCampaignCountArgs = {
  cursor?: InputMaybe<CampaignWhereUniqueInput>;
  distinct?: InputMaybe<Array<CampaignScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CampaignOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CampaignWhereInput>;
};


export type QueryCampaignsArgs = {
  cursor?: InputMaybe<CampaignWhereUniqueInput>;
  distinct?: InputMaybe<Array<CampaignScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CampaignOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CampaignWhereInput>;
};


export type QueryCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryCategoryCountArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryFileArgs = {
  where: FileWhereUniqueInput;
};


export type QueryFileCountArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryFilesArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryTiktokProductArgs = {
  where: TiktokProductWhereUniqueInput;
};


export type QueryTiktokProductCountArgs = {
  cursor?: InputMaybe<TiktokProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<TiktokProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TiktokProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TiktokProductWhereInput>;
};


export type QueryTiktokProductsArgs = {
  cursor?: InputMaybe<TiktokProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<TiktokProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TiktokProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TiktokProductWhereInput>;
};


export type QueryTiktokSellerArgs = {
  where: TiktokSellerWhereUniqueInput;
};


export type QueryTiktokSellerCountArgs = {
  cursor?: InputMaybe<TiktokSellerWhereUniqueInput>;
  distinct?: InputMaybe<Array<TiktokSellerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TiktokSellerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TiktokSellerWhereInput>;
};


export type QueryTiktokSellersArgs = {
  cursor?: InputMaybe<TiktokSellerWhereUniqueInput>;
  distinct?: InputMaybe<Array<TiktokSellerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TiktokSellerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TiktokSellerWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserCountArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RegisterUserRoleInput = {
  role: UserRoleCanRegister;
};

/**
 * @@allow('read', true)
 * @@allow('create,read,update,delete', auth().roles?[key == 'ADMIN'])
 * @HideOperations all
 */
export type Role = {
  __typename?: 'Role';
  key: RoleKey;
  users?: Maybe<Array<User>>;
};


/**
 * @@allow('read', true)
 * @@allow('create,read,update,delete', auth().roles?[key == 'ADMIN'])
 * @HideOperations all
 */
export type RoleUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export type RoleCountAggregate = {
  __typename?: 'RoleCountAggregate';
  _all: Scalars['Int']['output'];
  key: Scalars['Int']['output'];
};

export enum RoleKey {
  Admin = 'ADMIN',
  Influencer = 'INFLUENCER',
  Seller = 'SELLER'
}

export type RoleListRelationFilter = {
  every?: InputMaybe<RoleWhereInput>;
  none?: InputMaybe<RoleWhereInput>;
  some?: InputMaybe<RoleWhereInput>;
};

export type RoleMaxAggregate = {
  __typename?: 'RoleMaxAggregate';
  key?: Maybe<RoleKey>;
};

export type RoleMinAggregate = {
  __typename?: 'RoleMinAggregate';
  key?: Maybe<RoleKey>;
};

export type RoleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RoleOrderByWithRelationInput = {
  key?: InputMaybe<SortOrder>;
  users?: InputMaybe<UserOrderByRelationAggregateInput>;
};

export enum RoleScalarFieldEnum {
  Key = 'key'
}

export type RoleWhereInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  key?: InputMaybe<EnumRoleKeyFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type RoleWhereUniqueInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  key?: InputMaybe<RoleKey>;
  users?: InputMaybe<UserListRelationFilter>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * @@allow('read', true)
 * @@allow('create,read,update,delete', auth().roles?[key == 'ADMIN'])
 * @HideOperations create,update
 */
export type TiktokProduct = {
  __typename?: 'TiktokProduct';
  affiliateLink?: Maybe<Scalars['String']['output']>;
  campaings?: Maybe<Array<Campaign>>;
  categories?: Maybe<Array<Category>>;
  commissionPercent?: Maybe<Scalars['Int']['output']>;
  descDetail: Scalars['String']['output'];
  id: Scalars['String']['output'];
  images?: Maybe<Array<TiktokProductImage>>;
  price?: Maybe<TiktokProductPrice>;
  rating: Scalars['Float']['output'];
  reviewCount: Scalars['Int']['output'];
  reviewItems?: Maybe<Array<Scalars['JSON']['output']>>;
  seller: TiktokSeller;
  sellerId: Scalars['String']['output'];
  soldCount: Scalars['Int']['output'];
  specifications?: Maybe<Array<TiktokProductSpec>>;
  title: Scalars['String']['output'];
};


/**
 * @@allow('read', true)
 * @@allow('create,read,update,delete', auth().roles?[key == 'ADMIN'])
 * @HideOperations create,update
 */
export type TiktokProductCampaingsArgs = {
  cursor?: InputMaybe<CampaignWhereUniqueInput>;
  distinct?: InputMaybe<Array<CampaignScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CampaignOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CampaignWhereInput>;
};


/**
 * @@allow('read', true)
 * @@allow('create,read,update,delete', auth().roles?[key == 'ADMIN'])
 * @HideOperations create,update
 */
export type TiktokProductCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


/**
 * @@allow('read', true)
 * @@allow('create,read,update,delete', auth().roles?[key == 'ADMIN'])
 * @HideOperations create,update
 */
export type TiktokProductImagesArgs = {
  cursor?: InputMaybe<TiktokProductImageWhereUniqueInput>;
  distinct?: InputMaybe<Array<TiktokProductImageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TiktokProductImageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TiktokProductImageWhereInput>;
};


/**
 * @@allow('read', true)
 * @@allow('create,read,update,delete', auth().roles?[key == 'ADMIN'])
 * @HideOperations create,update
 */
export type TiktokProductSpecificationsArgs = {
  cursor?: InputMaybe<TiktokProductSpecWhereUniqueInput>;
  distinct?: InputMaybe<Array<TiktokProductSpecScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TiktokProductSpecOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TiktokProductSpecWhereInput>;
};

export type TiktokProductAvgAggregate = {
  __typename?: 'TiktokProductAvgAggregate';
  commissionPercent?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  reviewCount?: Maybe<Scalars['Float']['output']>;
  soldCount?: Maybe<Scalars['Float']['output']>;
};

export type TiktokProductCountAggregate = {
  __typename?: 'TiktokProductCountAggregate';
  _all: Scalars['Int']['output'];
  affiliateLink: Scalars['Int']['output'];
  commissionPercent: Scalars['Int']['output'];
  descDetail: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  reviewCount: Scalars['Int']['output'];
  reviewItems: Scalars['Int']['output'];
  sellerId: Scalars['Int']['output'];
  soldCount: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
};

export type TiktokProductCreateNestedManyWithoutCampaingsInput = {
  connect?: InputMaybe<Array<TiktokProductWhereUniqueInput>>;
  create?: InputMaybe<Array<TiktokProductCreateWithoutCampaingsInput>>;
};

export type TiktokProductCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<TiktokProductWhereUniqueInput>>;
  create?: InputMaybe<Array<TiktokProductCreateWithoutCategoriesInput>>;
};

export type TiktokProductCreateWithoutCampaingsInput = {
  affiliateLink?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<CategoryCreateNestedManyWithoutProductsInput>;
  commissionPercent?: InputMaybe<Scalars['Int']['input']>;
  descDetail: Scalars['String']['input'];
  id: Scalars['String']['input'];
  images?: InputMaybe<TiktokProductImageCreateNestedManyWithoutProductInput>;
  price?: InputMaybe<TiktokProductPriceCreateNestedOneWithoutProductInput>;
  rating: Scalars['Float']['input'];
  reviewCount: Scalars['Int']['input'];
  reviewItems?: InputMaybe<Array<Scalars['JSON']['input']>>;
  seller: TiktokSellerCreateNestedOneWithoutProductsInput;
  soldCount: Scalars['Int']['input'];
  specifications?: InputMaybe<TiktokProductSpecCreateNestedManyWithoutProductInput>;
  title: Scalars['String']['input'];
};

export type TiktokProductCreateWithoutCategoriesInput = {
  affiliateLink?: InputMaybe<Scalars['String']['input']>;
  campaings?: InputMaybe<CampaignCreateNestedManyWithoutProductsInput>;
  commissionPercent?: InputMaybe<Scalars['Int']['input']>;
  descDetail: Scalars['String']['input'];
  id: Scalars['String']['input'];
  images?: InputMaybe<TiktokProductImageCreateNestedManyWithoutProductInput>;
  price?: InputMaybe<TiktokProductPriceCreateNestedOneWithoutProductInput>;
  rating: Scalars['Float']['input'];
  reviewCount: Scalars['Int']['input'];
  reviewItems?: InputMaybe<Array<Scalars['JSON']['input']>>;
  seller: TiktokSellerCreateNestedOneWithoutProductsInput;
  soldCount: Scalars['Int']['input'];
  specifications?: InputMaybe<TiktokProductSpecCreateNestedManyWithoutProductInput>;
  title: Scalars['String']['input'];
};

/**
 * @@allow('read', true)
 * @@allow('create,read,update,delete', auth().roles?[key == 'ADMIN'])
 * @HideOperations all
 */
export type TiktokProductImage = {
  __typename?: 'TiktokProductImage';
  height: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  thumbUrlList?: Maybe<Array<Scalars['String']['output']>>;
  urlList?: Maybe<Array<Scalars['String']['output']>>;
  width: Scalars['Int']['output'];
};

export type TiktokProductImageAvgAggregate = {
  __typename?: 'TiktokProductImageAvgAggregate';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type TiktokProductImageCountAggregate = {
  __typename?: 'TiktokProductImageCountAggregate';
  _all: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  thumbUrlList: Scalars['Int']['output'];
  urlList: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};

export type TiktokProductImageCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<TiktokProductImageWhereUniqueInput>>;
  create?: InputMaybe<Array<TiktokProductImageCreateWithoutProductInput>>;
};

export type TiktokProductImageCreateWithoutProductInput = {
  height: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  thumbUrlList?: InputMaybe<Array<Scalars['String']['input']>>;
  urlList?: InputMaybe<Array<Scalars['String']['input']>>;
  width: Scalars['Int']['input'];
};

export type TiktokProductImageListRelationFilter = {
  every?: InputMaybe<TiktokProductImageWhereInput>;
  none?: InputMaybe<TiktokProductImageWhereInput>;
  some?: InputMaybe<TiktokProductImageWhereInput>;
};

export type TiktokProductImageMaxAggregate = {
  __typename?: 'TiktokProductImageMaxAggregate';
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type TiktokProductImageMinAggregate = {
  __typename?: 'TiktokProductImageMinAggregate';
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type TiktokProductImageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TiktokProductImageOrderByWithRelationInput = {
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  product?: InputMaybe<TiktokProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  thumbUrlList?: InputMaybe<SortOrder>;
  urlList?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export enum TiktokProductImageScalarFieldEnum {
  Height = 'height',
  Id = 'id',
  ProductId = 'productId',
  ThumbUrlList = 'thumbUrlList',
  UrlList = 'urlList',
  Width = 'width'
}

export type TiktokProductImageSumAggregate = {
  __typename?: 'TiktokProductImageSumAggregate';
  height?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type TiktokProductImageUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<TiktokProductImageWhereUniqueInput>>;
  create?: InputMaybe<Array<TiktokProductImageCreateWithoutProductInput>>;
  delete?: InputMaybe<Array<TiktokProductImageWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<TiktokProductImageWhereUniqueInput>>;
  update?: InputMaybe<Array<TiktokProductImageUpdateWithWhereUniqueWithoutProductInput>>;
};

export type TiktokProductImageUpdateWithWhereUniqueWithoutProductInput = {
  data: TiktokProductImageUpdateWithoutProductInput;
  where: TiktokProductImageWhereUniqueInput;
};

export type TiktokProductImageUpdateWithoutProductInput = {
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  thumbUrlList?: InputMaybe<Array<Scalars['String']['input']>>;
  urlList?: InputMaybe<Array<Scalars['String']['input']>>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type TiktokProductImageWhereInput = {
  AND?: InputMaybe<Array<TiktokProductImageWhereInput>>;
  NOT?: InputMaybe<Array<TiktokProductImageWhereInput>>;
  OR?: InputMaybe<Array<TiktokProductImageWhereInput>>;
  height?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  product?: InputMaybe<TiktokProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  thumbUrlList?: InputMaybe<StringNullableListFilter>;
  urlList?: InputMaybe<StringNullableListFilter>;
  width?: InputMaybe<IntFilter>;
};

export type TiktokProductImageWhereUniqueInput = {
  AND?: InputMaybe<Array<TiktokProductImageWhereInput>>;
  NOT?: InputMaybe<Array<TiktokProductImageWhereInput>>;
  OR?: InputMaybe<Array<TiktokProductImageWhereInput>>;
  height?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<TiktokProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  thumbUrlList?: InputMaybe<StringNullableListFilter>;
  urlList?: InputMaybe<StringNullableListFilter>;
  width?: InputMaybe<IntFilter>;
};

export type TiktokProductListRelationFilter = {
  every?: InputMaybe<TiktokProductWhereInput>;
  none?: InputMaybe<TiktokProductWhereInput>;
  some?: InputMaybe<TiktokProductWhereInput>;
};

export type TiktokProductMaxAggregate = {
  __typename?: 'TiktokProductMaxAggregate';
  affiliateLink?: Maybe<Scalars['String']['output']>;
  commissionPercent?: Maybe<Scalars['Int']['output']>;
  descDetail?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  reviewCount?: Maybe<Scalars['Int']['output']>;
  sellerId?: Maybe<Scalars['String']['output']>;
  soldCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type TiktokProductMinAggregate = {
  __typename?: 'TiktokProductMinAggregate';
  affiliateLink?: Maybe<Scalars['String']['output']>;
  commissionPercent?: Maybe<Scalars['Int']['output']>;
  descDetail?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  reviewCount?: Maybe<Scalars['Int']['output']>;
  sellerId?: Maybe<Scalars['String']['output']>;
  soldCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type TiktokProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TiktokProductOrderByWithRelationInput = {
  affiliateLink?: InputMaybe<SortOrderInput>;
  campaings?: InputMaybe<CampaignOrderByRelationAggregateInput>;
  categories?: InputMaybe<CategoryOrderByRelationAggregateInput>;
  commissionPercent?: InputMaybe<SortOrderInput>;
  descDetail?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<TiktokProductImageOrderByRelationAggregateInput>;
  price?: InputMaybe<TiktokProductPriceOrderByWithRelationInput>;
  rating?: InputMaybe<SortOrder>;
  reviewCount?: InputMaybe<SortOrder>;
  reviewItems?: InputMaybe<SortOrder>;
  seller?: InputMaybe<TiktokSellerOrderByWithRelationInput>;
  sellerId?: InputMaybe<SortOrder>;
  soldCount?: InputMaybe<SortOrder>;
  specifications?: InputMaybe<TiktokProductSpecOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
};

/**
 * @@allow('read', true)
 * @@allow('create,read,update,delete', auth().roles?[key == 'ADMIN'])
 * @HideOperations all
 */
export type TiktokProductPrice = {
  __typename?: 'TiktokProductPrice';
  currency: Scalars['String']['output'];
  currencySymbol: Scalars['String']['output'];
  discountText: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isIntervalPrice: Scalars['Boolean']['output'];
  maxOriginalSkuPrice?: Maybe<Scalars['Decimal']['output']>;
  maxSkuPrice?: Maybe<Scalars['Decimal']['output']>;
  minOriginalSkuPrice: Scalars['Decimal']['output'];
  minSkuPrice: Scalars['Decimal']['output'];
  originalPriceText: Scalars['String']['output'];
  realPriceText: Scalars['String']['output'];
};

export type TiktokProductPriceAvgAggregate = {
  __typename?: 'TiktokProductPriceAvgAggregate';
  maxOriginalSkuPrice?: Maybe<Scalars['Decimal']['output']>;
  maxSkuPrice?: Maybe<Scalars['Decimal']['output']>;
  minOriginalSkuPrice?: Maybe<Scalars['Decimal']['output']>;
  minSkuPrice?: Maybe<Scalars['Decimal']['output']>;
};

export type TiktokProductPriceCountAggregate = {
  __typename?: 'TiktokProductPriceCountAggregate';
  _all: Scalars['Int']['output'];
  currency: Scalars['Int']['output'];
  currencySymbol: Scalars['Int']['output'];
  discountText: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isIntervalPrice: Scalars['Int']['output'];
  maxOriginalSkuPrice: Scalars['Int']['output'];
  maxSkuPrice: Scalars['Int']['output'];
  minOriginalSkuPrice: Scalars['Int']['output'];
  minSkuPrice: Scalars['Int']['output'];
  originalPriceText: Scalars['Int']['output'];
  realPriceText: Scalars['Int']['output'];
};

export type TiktokProductPriceCreateNestedOneWithoutProductInput = {
  connect?: InputMaybe<TiktokProductPriceWhereUniqueInput>;
  create?: InputMaybe<TiktokProductPriceCreateWithoutProductInput>;
};

export type TiktokProductPriceCreateWithoutProductInput = {
  currency: Scalars['String']['input'];
  currencySymbol: Scalars['String']['input'];
  discountText: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isIntervalPrice: Scalars['Boolean']['input'];
  maxOriginalSkuPrice?: InputMaybe<Scalars['Decimal']['input']>;
  maxSkuPrice?: InputMaybe<Scalars['Decimal']['input']>;
  minOriginalSkuPrice: Scalars['Decimal']['input'];
  minSkuPrice: Scalars['Decimal']['input'];
  originalPriceText: Scalars['String']['input'];
  realPriceText: Scalars['String']['input'];
};

export type TiktokProductPriceMaxAggregate = {
  __typename?: 'TiktokProductPriceMaxAggregate';
  currency?: Maybe<Scalars['String']['output']>;
  currencySymbol?: Maybe<Scalars['String']['output']>;
  discountText?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isIntervalPrice?: Maybe<Scalars['Boolean']['output']>;
  maxOriginalSkuPrice?: Maybe<Scalars['Decimal']['output']>;
  maxSkuPrice?: Maybe<Scalars['Decimal']['output']>;
  minOriginalSkuPrice?: Maybe<Scalars['Decimal']['output']>;
  minSkuPrice?: Maybe<Scalars['Decimal']['output']>;
  originalPriceText?: Maybe<Scalars['String']['output']>;
  realPriceText?: Maybe<Scalars['String']['output']>;
};

export type TiktokProductPriceMinAggregate = {
  __typename?: 'TiktokProductPriceMinAggregate';
  currency?: Maybe<Scalars['String']['output']>;
  currencySymbol?: Maybe<Scalars['String']['output']>;
  discountText?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isIntervalPrice?: Maybe<Scalars['Boolean']['output']>;
  maxOriginalSkuPrice?: Maybe<Scalars['Decimal']['output']>;
  maxSkuPrice?: Maybe<Scalars['Decimal']['output']>;
  minOriginalSkuPrice?: Maybe<Scalars['Decimal']['output']>;
  minSkuPrice?: Maybe<Scalars['Decimal']['output']>;
  originalPriceText?: Maybe<Scalars['String']['output']>;
  realPriceText?: Maybe<Scalars['String']['output']>;
};

export type TiktokProductPriceNullableRelationFilter = {
  is?: InputMaybe<TiktokProductPriceWhereInput>;
  isNot?: InputMaybe<TiktokProductPriceWhereInput>;
};

export type TiktokProductPriceOrderByWithRelationInput = {
  currency?: InputMaybe<SortOrder>;
  currencySymbol?: InputMaybe<SortOrder>;
  discountText?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isIntervalPrice?: InputMaybe<SortOrder>;
  maxOriginalSkuPrice?: InputMaybe<SortOrderInput>;
  maxSkuPrice?: InputMaybe<SortOrderInput>;
  minOriginalSkuPrice?: InputMaybe<SortOrder>;
  minSkuPrice?: InputMaybe<SortOrder>;
  originalPriceText?: InputMaybe<SortOrder>;
  product?: InputMaybe<TiktokProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  realPriceText?: InputMaybe<SortOrder>;
};

export type TiktokProductPriceSumAggregate = {
  __typename?: 'TiktokProductPriceSumAggregate';
  maxOriginalSkuPrice?: Maybe<Scalars['Decimal']['output']>;
  maxSkuPrice?: Maybe<Scalars['Decimal']['output']>;
  minOriginalSkuPrice?: Maybe<Scalars['Decimal']['output']>;
  minSkuPrice?: Maybe<Scalars['Decimal']['output']>;
};

export type TiktokProductPriceUpdateOneWithoutProductNestedInput = {
  connect?: InputMaybe<TiktokProductPriceWhereUniqueInput>;
  create?: InputMaybe<TiktokProductPriceCreateWithoutProductInput>;
  delete?: InputMaybe<TiktokProductPriceWhereInput>;
  disconnect?: InputMaybe<TiktokProductPriceWhereInput>;
  update?: InputMaybe<TiktokProductPriceUpdateToOneWithWhereWithoutProductInput>;
};

export type TiktokProductPriceUpdateToOneWithWhereWithoutProductInput = {
  data: TiktokProductPriceUpdateWithoutProductInput;
  where?: InputMaybe<TiktokProductPriceWhereInput>;
};

export type TiktokProductPriceUpdateWithoutProductInput = {
  currency?: InputMaybe<Scalars['String']['input']>;
  currencySymbol?: InputMaybe<Scalars['String']['input']>;
  discountText?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isIntervalPrice?: InputMaybe<Scalars['Boolean']['input']>;
  maxOriginalSkuPrice?: InputMaybe<Scalars['Decimal']['input']>;
  maxSkuPrice?: InputMaybe<Scalars['Decimal']['input']>;
  minOriginalSkuPrice?: InputMaybe<Scalars['Decimal']['input']>;
  minSkuPrice?: InputMaybe<Scalars['Decimal']['input']>;
  originalPriceText?: InputMaybe<Scalars['String']['input']>;
  realPriceText?: InputMaybe<Scalars['String']['input']>;
};

export type TiktokProductPriceWhereInput = {
  AND?: InputMaybe<Array<TiktokProductPriceWhereInput>>;
  NOT?: InputMaybe<Array<TiktokProductPriceWhereInput>>;
  OR?: InputMaybe<Array<TiktokProductPriceWhereInput>>;
  currency?: InputMaybe<StringFilter>;
  currencySymbol?: InputMaybe<StringFilter>;
  discountText?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isIntervalPrice?: InputMaybe<BoolFilter>;
  maxOriginalSkuPrice?: InputMaybe<DecimalNullableFilter>;
  maxSkuPrice?: InputMaybe<DecimalNullableFilter>;
  minOriginalSkuPrice?: InputMaybe<DecimalFilter>;
  minSkuPrice?: InputMaybe<DecimalFilter>;
  originalPriceText?: InputMaybe<StringFilter>;
  product?: InputMaybe<TiktokProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  realPriceText?: InputMaybe<StringFilter>;
};

export type TiktokProductPriceWhereUniqueInput = {
  AND?: InputMaybe<Array<TiktokProductPriceWhereInput>>;
  NOT?: InputMaybe<Array<TiktokProductPriceWhereInput>>;
  OR?: InputMaybe<Array<TiktokProductPriceWhereInput>>;
  currency?: InputMaybe<StringFilter>;
  currencySymbol?: InputMaybe<StringFilter>;
  discountText?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  isIntervalPrice?: InputMaybe<BoolFilter>;
  maxOriginalSkuPrice?: InputMaybe<DecimalNullableFilter>;
  maxSkuPrice?: InputMaybe<DecimalNullableFilter>;
  minOriginalSkuPrice?: InputMaybe<DecimalFilter>;
  minSkuPrice?: InputMaybe<DecimalFilter>;
  originalPriceText?: InputMaybe<StringFilter>;
  product?: InputMaybe<TiktokProductRelationFilter>;
  productId?: InputMaybe<Scalars['String']['input']>;
  realPriceText?: InputMaybe<StringFilter>;
};

export type TiktokProductRelationFilter = {
  is?: InputMaybe<TiktokProductWhereInput>;
  isNot?: InputMaybe<TiktokProductWhereInput>;
};

export enum TiktokProductScalarFieldEnum {
  AffiliateLink = 'affiliateLink',
  CommissionPercent = 'commissionPercent',
  DescDetail = 'descDetail',
  Id = 'id',
  Rating = 'rating',
  ReviewCount = 'reviewCount',
  ReviewItems = 'reviewItems',
  SellerId = 'sellerId',
  SoldCount = 'soldCount',
  Title = 'title'
}

/**
 * @@allow('read', true)
 * @@allow('create,read,update,delete', auth().roles?[key == 'ADMIN'])
 * @HideOperations all
 */
export type TiktokProductSpec = {
  __typename?: 'TiktokProductSpec';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type TiktokProductSpecCountAggregate = {
  __typename?: 'TiktokProductSpecCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

export type TiktokProductSpecCreateNestedManyWithoutProductInput = {
  connect?: InputMaybe<Array<TiktokProductSpecWhereUniqueInput>>;
  create?: InputMaybe<Array<TiktokProductSpecCreateWithoutProductInput>>;
};

export type TiktokProductSpecCreateWithoutProductInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type TiktokProductSpecListRelationFilter = {
  every?: InputMaybe<TiktokProductSpecWhereInput>;
  none?: InputMaybe<TiktokProductSpecWhereInput>;
  some?: InputMaybe<TiktokProductSpecWhereInput>;
};

export type TiktokProductSpecMaxAggregate = {
  __typename?: 'TiktokProductSpecMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type TiktokProductSpecMinAggregate = {
  __typename?: 'TiktokProductSpecMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type TiktokProductSpecOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TiktokProductSpecOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  product?: InputMaybe<TiktokProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum TiktokProductSpecScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  ProductId = 'productId',
  Value = 'value'
}

export type TiktokProductSpecUpdateManyWithoutProductNestedInput = {
  connect?: InputMaybe<Array<TiktokProductSpecWhereUniqueInput>>;
  create?: InputMaybe<Array<TiktokProductSpecCreateWithoutProductInput>>;
  delete?: InputMaybe<Array<TiktokProductSpecWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<TiktokProductSpecWhereUniqueInput>>;
  update?: InputMaybe<Array<TiktokProductSpecUpdateWithWhereUniqueWithoutProductInput>>;
};

export type TiktokProductSpecUpdateWithWhereUniqueWithoutProductInput = {
  data: TiktokProductSpecUpdateWithoutProductInput;
  where: TiktokProductSpecWhereUniqueInput;
};

export type TiktokProductSpecUpdateWithoutProductInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type TiktokProductSpecWhereInput = {
  AND?: InputMaybe<Array<TiktokProductSpecWhereInput>>;
  NOT?: InputMaybe<Array<TiktokProductSpecWhereInput>>;
  OR?: InputMaybe<Array<TiktokProductSpecWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  product?: InputMaybe<TiktokProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type TiktokProductSpecWhereUniqueInput = {
  AND?: InputMaybe<Array<TiktokProductSpecWhereInput>>;
  NOT?: InputMaybe<Array<TiktokProductSpecWhereInput>>;
  OR?: InputMaybe<Array<TiktokProductSpecWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  product?: InputMaybe<TiktokProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type TiktokProductSumAggregate = {
  __typename?: 'TiktokProductSumAggregate';
  commissionPercent?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  reviewCount?: Maybe<Scalars['Int']['output']>;
  soldCount?: Maybe<Scalars['Int']['output']>;
};

export type TiktokProductUpdateManyWithoutCampaingsNestedInput = {
  connect?: InputMaybe<Array<TiktokProductWhereUniqueInput>>;
  create?: InputMaybe<Array<TiktokProductCreateWithoutCampaingsInput>>;
  delete?: InputMaybe<Array<TiktokProductWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<TiktokProductWhereUniqueInput>>;
  update?: InputMaybe<Array<TiktokProductUpdateWithWhereUniqueWithoutCampaingsInput>>;
};

export type TiktokProductUpdateManyWithoutCategoriesNestedInput = {
  connect?: InputMaybe<Array<TiktokProductWhereUniqueInput>>;
  create?: InputMaybe<Array<TiktokProductCreateWithoutCategoriesInput>>;
  delete?: InputMaybe<Array<TiktokProductWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<TiktokProductWhereUniqueInput>>;
  update?: InputMaybe<Array<TiktokProductUpdateWithWhereUniqueWithoutCategoriesInput>>;
};

export type TiktokProductUpdateWithWhereUniqueWithoutCampaingsInput = {
  data: TiktokProductUpdateWithoutCampaingsInput;
  where: TiktokProductWhereUniqueInput;
};

export type TiktokProductUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: TiktokProductUpdateWithoutCategoriesInput;
  where: TiktokProductWhereUniqueInput;
};

export type TiktokProductUpdateWithoutCampaingsInput = {
  affiliateLink?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<CategoryUpdateManyWithoutProductsNestedInput>;
  commissionPercent?: InputMaybe<Scalars['Int']['input']>;
  descDetail?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<TiktokProductImageUpdateManyWithoutProductNestedInput>;
  price?: InputMaybe<TiktokProductPriceUpdateOneWithoutProductNestedInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  reviewCount?: InputMaybe<Scalars['Int']['input']>;
  reviewItems?: InputMaybe<Array<Scalars['JSON']['input']>>;
  seller?: InputMaybe<TiktokSellerUpdateOneRequiredWithoutProductsNestedInput>;
  soldCount?: InputMaybe<Scalars['Int']['input']>;
  specifications?: InputMaybe<TiktokProductSpecUpdateManyWithoutProductNestedInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TiktokProductUpdateWithoutCategoriesInput = {
  affiliateLink?: InputMaybe<Scalars['String']['input']>;
  campaings?: InputMaybe<CampaignUpdateManyWithoutProductsNestedInput>;
  commissionPercent?: InputMaybe<Scalars['Int']['input']>;
  descDetail?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<TiktokProductImageUpdateManyWithoutProductNestedInput>;
  price?: InputMaybe<TiktokProductPriceUpdateOneWithoutProductNestedInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  reviewCount?: InputMaybe<Scalars['Int']['input']>;
  reviewItems?: InputMaybe<Array<Scalars['JSON']['input']>>;
  seller?: InputMaybe<TiktokSellerUpdateOneRequiredWithoutProductsNestedInput>;
  soldCount?: InputMaybe<Scalars['Int']['input']>;
  specifications?: InputMaybe<TiktokProductSpecUpdateManyWithoutProductNestedInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type TiktokProductWhereInput = {
  AND?: InputMaybe<Array<TiktokProductWhereInput>>;
  NOT?: InputMaybe<Array<TiktokProductWhereInput>>;
  OR?: InputMaybe<Array<TiktokProductWhereInput>>;
  affiliateLink?: InputMaybe<StringNullableFilter>;
  campaings?: InputMaybe<CampaignListRelationFilter>;
  categories?: InputMaybe<CategoryListRelationFilter>;
  commissionPercent?: InputMaybe<IntNullableFilter>;
  descDetail?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  images?: InputMaybe<TiktokProductImageListRelationFilter>;
  price?: InputMaybe<TiktokProductPriceNullableRelationFilter>;
  rating?: InputMaybe<FloatFilter>;
  reviewCount?: InputMaybe<IntFilter>;
  reviewItems?: InputMaybe<JsonNullableListFilter>;
  seller?: InputMaybe<TiktokSellerRelationFilter>;
  sellerId?: InputMaybe<StringFilter>;
  soldCount?: InputMaybe<IntFilter>;
  specifications?: InputMaybe<TiktokProductSpecListRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type TiktokProductWhereUniqueInput = {
  AND?: InputMaybe<Array<TiktokProductWhereInput>>;
  NOT?: InputMaybe<Array<TiktokProductWhereInput>>;
  OR?: InputMaybe<Array<TiktokProductWhereInput>>;
  affiliateLink?: InputMaybe<StringNullableFilter>;
  campaings?: InputMaybe<CampaignListRelationFilter>;
  categories?: InputMaybe<CategoryListRelationFilter>;
  commissionPercent?: InputMaybe<IntNullableFilter>;
  descDetail?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<TiktokProductImageListRelationFilter>;
  price?: InputMaybe<TiktokProductPriceNullableRelationFilter>;
  rating?: InputMaybe<FloatFilter>;
  reviewCount?: InputMaybe<IntFilter>;
  reviewItems?: InputMaybe<JsonNullableListFilter>;
  seller?: InputMaybe<TiktokSellerRelationFilter>;
  sellerId?: InputMaybe<StringFilter>;
  soldCount?: InputMaybe<IntFilter>;
  specifications?: InputMaybe<TiktokProductSpecListRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

/**
 * @@allow('read', true)
 * @@allow('create,read,update,delete', auth().roles?[key == 'ADMIN'])
 * @HideOperations create,update
 */
export type TiktokSeller = {
  __typename?: 'TiktokSeller';
  avatar: Scalars['JSON']['output'];
  id: Scalars['String']['output'];
  imSchema: Scalars['String']['output'];
  isHide: Scalars['Boolean']['output'];
  link: Scalars['String']['output'];
  name: Scalars['String']['output'];
  originalData: Scalars['JSON']['output'];
  productCount: Scalars['Int']['output'];
  products?: Maybe<Array<TiktokProduct>>;
  shopRecommendIsRecommend: Scalars['Boolean']['output'];
};


/**
 * @@allow('read', true)
 * @@allow('create,read,update,delete', auth().roles?[key == 'ADMIN'])
 * @HideOperations create,update
 */
export type TiktokSellerProductsArgs = {
  cursor?: InputMaybe<TiktokProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<TiktokProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TiktokProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TiktokProductWhereInput>;
};

export type TiktokSellerAvgAggregate = {
  __typename?: 'TiktokSellerAvgAggregate';
  productCount?: Maybe<Scalars['Float']['output']>;
};

export type TiktokSellerCountAggregate = {
  __typename?: 'TiktokSellerCountAggregate';
  _all: Scalars['Int']['output'];
  avatar: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  imSchema: Scalars['Int']['output'];
  isHide: Scalars['Int']['output'];
  link: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  originalData: Scalars['Int']['output'];
  productCount: Scalars['Int']['output'];
  shopRecommendIsRecommend: Scalars['Int']['output'];
};

export type TiktokSellerCreateNestedOneWithoutProductsInput = {
  connect?: InputMaybe<TiktokSellerWhereUniqueInput>;
  create?: InputMaybe<TiktokSellerCreateWithoutProductsInput>;
};

export type TiktokSellerCreateWithoutProductsInput = {
  avatar: Scalars['JSON']['input'];
  id: Scalars['String']['input'];
  imSchema: Scalars['String']['input'];
  isHide: Scalars['Boolean']['input'];
  link: Scalars['String']['input'];
  name: Scalars['String']['input'];
  originalData: Scalars['JSON']['input'];
  productCount: Scalars['Int']['input'];
  shopRecommendIsRecommend: Scalars['Boolean']['input'];
};

export type TiktokSellerMaxAggregate = {
  __typename?: 'TiktokSellerMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  imSchema?: Maybe<Scalars['String']['output']>;
  isHide?: Maybe<Scalars['Boolean']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  productCount?: Maybe<Scalars['Int']['output']>;
  shopRecommendIsRecommend?: Maybe<Scalars['Boolean']['output']>;
};

export type TiktokSellerMinAggregate = {
  __typename?: 'TiktokSellerMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  imSchema?: Maybe<Scalars['String']['output']>;
  isHide?: Maybe<Scalars['Boolean']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  productCount?: Maybe<Scalars['Int']['output']>;
  shopRecommendIsRecommend?: Maybe<Scalars['Boolean']['output']>;
};

export type TiktokSellerOrderByWithRelationInput = {
  avatar?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imSchema?: InputMaybe<SortOrder>;
  isHide?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  originalData?: InputMaybe<SortOrder>;
  productCount?: InputMaybe<SortOrder>;
  products?: InputMaybe<TiktokProductOrderByRelationAggregateInput>;
  shopRecommendIsRecommend?: InputMaybe<SortOrder>;
};

export type TiktokSellerRelationFilter = {
  is?: InputMaybe<TiktokSellerWhereInput>;
  isNot?: InputMaybe<TiktokSellerWhereInput>;
};

export enum TiktokSellerScalarFieldEnum {
  Avatar = 'avatar',
  Id = 'id',
  ImSchema = 'imSchema',
  IsHide = 'isHide',
  Link = 'link',
  Name = 'name',
  OriginalData = 'originalData',
  ProductCount = 'productCount',
  ShopRecommendIsRecommend = 'shopRecommendIsRecommend'
}

export type TiktokSellerSumAggregate = {
  __typename?: 'TiktokSellerSumAggregate';
  productCount?: Maybe<Scalars['Int']['output']>;
};

export type TiktokSellerUpdateOneRequiredWithoutProductsNestedInput = {
  connect?: InputMaybe<TiktokSellerWhereUniqueInput>;
  create?: InputMaybe<TiktokSellerCreateWithoutProductsInput>;
  update?: InputMaybe<TiktokSellerUpdateToOneWithWhereWithoutProductsInput>;
};

export type TiktokSellerUpdateToOneWithWhereWithoutProductsInput = {
  data: TiktokSellerUpdateWithoutProductsInput;
  where?: InputMaybe<TiktokSellerWhereInput>;
};

export type TiktokSellerUpdateWithoutProductsInput = {
  avatar?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imSchema?: InputMaybe<Scalars['String']['input']>;
  isHide?: InputMaybe<Scalars['Boolean']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  originalData?: InputMaybe<Scalars['JSON']['input']>;
  productCount?: InputMaybe<Scalars['Int']['input']>;
  shopRecommendIsRecommend?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TiktokSellerWhereInput = {
  AND?: InputMaybe<Array<TiktokSellerWhereInput>>;
  NOT?: InputMaybe<Array<TiktokSellerWhereInput>>;
  OR?: InputMaybe<Array<TiktokSellerWhereInput>>;
  avatar?: InputMaybe<JsonFilter>;
  id?: InputMaybe<StringFilter>;
  imSchema?: InputMaybe<StringFilter>;
  isHide?: InputMaybe<BoolFilter>;
  link?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  originalData?: InputMaybe<JsonFilter>;
  productCount?: InputMaybe<IntFilter>;
  products?: InputMaybe<TiktokProductListRelationFilter>;
  shopRecommendIsRecommend?: InputMaybe<BoolFilter>;
};

export type TiktokSellerWhereUniqueInput = {
  AND?: InputMaybe<Array<TiktokSellerWhereInput>>;
  NOT?: InputMaybe<Array<TiktokSellerWhereInput>>;
  OR?: InputMaybe<Array<TiktokSellerWhereInput>>;
  avatar?: InputMaybe<JsonFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  imSchema?: InputMaybe<StringFilter>;
  isHide?: InputMaybe<BoolFilter>;
  link?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  originalData?: InputMaybe<JsonFilter>;
  productCount?: InputMaybe<IntFilter>;
  products?: InputMaybe<TiktokProductListRelationFilter>;
  shopRecommendIsRecommend?: InputMaybe<BoolFilter>;
};

/**
 * @@allow('read', true)
 * @@allow('delete', auth().roles?[key == 'ADMIN'])
 * @HideOperations create,update,deleteOne,deleteMany
 */
export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  roles?: Maybe<Array<Role>>;
};


/**
 * @@allow('read', true)
 * @@allow('delete', auth().roles?[key == 'ADMIN'])
 * @HideOperations create,update,deleteOne,deleteMany
 */
export type UserRolesArgs = {
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<RoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleWhereInput>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  roles?: InputMaybe<RoleOrderByRelationAggregateInput>;
};

export enum UserRoleCanRegister {
  Influencer = 'INFLUENCER',
  Seller = 'SELLER'
}

export enum UserScalarFieldEnum {
  Email = 'email',
  Id = 'id',
  Name = 'name'
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  roles?: InputMaybe<RoleListRelationFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  roles?: InputMaybe<RoleListRelationFilter>;
};
