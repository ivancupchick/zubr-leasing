export type WPPostType = {
  ID: number;
  post_author: number,
  post_date: Date,
  post_date_gmt: Date,
  post_content: string,
  post_title: string,
  post_excerpt: string,
  post_status: string,
  comment_status: string,
  ping_status: string,
  post_password: string,
  post_name: string,
  to_ping: string,
  pinged: string,
  post_modified: Date,
  post_modified_gmt: Date,
  post_content_filtered: string,
  post_parent: number,
  guid: string,
  menu_order: number,
  post_type: string,
  post_mime_type: string,
  comment_count: number
}

export type WPPostMetaType = {
  meta_id: number;
  post_id: number;
  meta_key: string;
  meta_value: string;
}

export type GetVehicle = {
  id: number;
  post_title?: string;
  post_name?: string;
  attachments?: string[];
  vehicle_overview?: string;
  year?: string;
  petrol?: string;
  engineCapacity?: string;
  transmission?: string;
  mileage?: string;
  bodyType?: string;
  wheelDrive?: string;
  price?: string;
  video?: string;
}

export enum VehicleWpToNormalFields {
  'year' = 'd0b3d0bed0b4-d0b2d18bd0bfd183d181d0bad0b0',
  'petrol' = 'd182d0bed0bfd0bbd0b8d0b2d0be',
  'engineCapacity' = 'd0bed0b1d18ad191d0bc',
  'transmission' = 'd182d180d0b0d0bdd181d0bcd0b8d181d181d0b8d18f',
  'mileage' = 'd0bfd180d0bed0b1d0b5d0b3',
  'bodyType' = 'd182d0b8d0bf-d0bad183d0b7d0bed0b2d0b0',
  'wheelDrive' = 'd0bfd180d0b8d0b2d0bed0b4',
  'price' = 'price',
  'vehicle_overview' = 'vehicle_overview',
  'video' = 'video'
}
