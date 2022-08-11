import { ImageList, ImageListItem } from "@mui/material"
import Image from "next/image";


const itemData = [
    {
        img: '/bilder/flaggborg.jpg',
        title: 'Falggborg',
    },
    {
        img: '/bilder/vaffel.jpg',
        title: 'Vaffel',
    },
    {
        img: '/bilder/happy-day.jpg',
        title: 'Nadderud speiderleir',
    },
    {
        img: '/bilder/pionering.jpg',
        title: 'Pionering',
    },
    {
        img: '/bilder/spikking.jpg',
        title: 'Spikking',
    },
    {
        img: '/bilder/vann.jpg',
        title: 'Vann',
    },
];

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export const Imageroll = () => {
    return (
        <ImageList
            sx={{ maxWidth: 900, mx: "auto" }}
            cols={4}
            rowHeight={121}
        >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={2} rows={2}>
                    <Image
                        layout="fill"
                        objectFit="cover"
                        src={item.img}
                        alt={item.title}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}