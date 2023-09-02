export interface UnsphotoApiCompleteType {
    user: {
        accepted_tos: boolean;
        bio: string;
        first_name: string;
        for_hire: boolean;
        id: string;
        instagram_username: string;
        last_name: string;
        links: {
            followers: string;
            following: string;
            html: string;
            likes: string;
            photos: string;
            portfolio: string;
            self: string;
        }
        location: string;
        name: string;
        portfolio_url: string;
        profile_image: {
            large: string;
            medium: string;
            small: string;
        }
        social: {
            instagram_username: string;
            paypal_email: string;
            portfolio_url: string;
            twitter_username: string;
        }
        total_collections: number;
        total_likes: number;
        total_photos: number;
        twitter_username: string;
        update_at: string;
        username: string;
    },
    links: {
        download: string;
        download_location: string;
        html: string;
        self: string;
    },
    urls: {
        full: string;
        raw: string;
        regular: string;
        small: string;
        small_s3: string;
        thumb: string;
    },
    created_at: string;
    updated_at: string;
    likes: number;
    downloads: number;
    views: number;
    exif: {
        aperture: string;
        exposure_time: string;
        focal_length: string;
        iso: number;
        make: string;
        model: string;
        name: string;
    }
    alt: string;
}

export interface UnsphotoApiUserType {
    accepted_tos: boolean;
    bio: string;
    first_name: string;
    for_hire: boolean;
    id: string;
    instagram_username: string;
    last_name: string;
    links: {
        followers: string;
        following: string;
        html: string;
        likes: string;
        photos: string;
        portfolio: string;
        self: string;
    }
    location: string;
    name: string;
    portfolio_url: string;
    profile_image: {
        large: string;
        medium: string;
        small: string;
    }
    social: {
        instagram_username: string;
        paypal_email: string;
        portfolio_url: string;
        twitter_username: string;
    }
    total_collections: number;
    total_likes: number;
    total_photos: number;
    twitter_username: string;
    update_at: string;
    username: string;
    created_at: string;
    updated_at: string;
    likes: number;
    downloads: number;
    views: number;
    exif: {
        aperture: string;
        exposure_time: string;
        focal_length: string;
        iso: number;
        make: string;
        model: string;
        name: string;
    }
    alt: string;
}

export interface UnsphotoApiLinksType {
    download: string;
    download_location: string;
    html: string;
    self: string;
}

export interface UnsphotoApiUrlsType {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
}