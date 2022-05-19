export interface Urls {
  raw?: string
  full?: string
  regular: string
  small?: string
  thumb: string
  small_s3?: string
}

export interface Links {
  self?: string
  html?: string
  download?: string
  download_location?: string
}

export interface Links2 {
  self?: string
  html?: string
  photos?: string
  likes?: string
  portfolio?: string
  following?: string
  followers?: string
}

export interface ProfileImage {
  small?: string
  medium?: string
  large?: string
}

export interface Social {
  instagram_username?: string
  portfolio_url?: string
  twitter_username?: string
  paypal_email?: any
}

export interface Sponsor {
  id?: string
  updated_at?: Date
  username?: string
  name?: string
  first_name?: string
  last_name?: any
  twitter_username?: string
  portfolio_url?: string
  bio?: string
  location?: any
  links?: Links2
  profile_image?: ProfileImage
  instagram_username?: string
  total_collections?: number
  total_likes?: number
  total_photos?: number
  accepted_tos?: boolean
  for_hire?: boolean
  social?: Social
}

export interface Sponsorship {
  impression_urls?: string[]
  tagline?: string
  tagline_url?: string
  sponsor?: Sponsor
}

export interface TexturesPatterns {
  status?: string
}

export interface Wallpapers {
  status?: string
}

export interface Architecture {
  status?: string
}

export interface Film {
  status?: string
}

export interface StreetPhotography {
  status?: string
}

export interface TopicSubmissions {
  wallpapers?: Wallpapers
  architecture?: Architecture
  film?: Film
}

export interface Links3 {
  self?: string
  html?: string
  photos?: string
  likes?: string
  portfolio?: string
  following?: string
  followers?: string
}

export interface ProfileImage2 {
  small?: string
  medium?: string
  large?: string
}

export interface Social2 {
  instagram_username?: string
  portfolio_url?: string
  twitter_username?: string
  paypal_email?: any
}

export interface User {
  id: string
  updated_at?: Date
  username?: string
  name?: string
  first_name?: string
  last_name?: string
  twitter_username?: string
  portfolio_url?: string
  bio?: string
  location?: string
  links?: Links3
  profile_image?: ProfileImage2
  instagram_username?: string
  total_collections?: number
  total_likes?: number
  total_photos?: number
  accepted_tos?: boolean
  for_hire?: boolean
  social?: Social2
}

export interface RootObject {
  id: string
  created_at?: Date
  updated_at?: Date
  promoted_at?: Date
  width: number
  height: number
  color?: string
  blur_hash?: string
  real_hash: string
  description?: string
  alt_description?: string
  urls: Urls
  links?: Links
  categories?: any[]
  likes?: number
  liked_by_user?: boolean
  current_user_collections?: any[]
  sponsorship?: Sponsorship
  topic_submissions?: TopicSubmissions
  user?: User
}

export interface Imagine {
  total: number
  total_pages: number
  results?: RootObject[]
}
