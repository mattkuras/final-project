# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
guitars_names = ["Epiphone Limited-Edition Les Paul Studio Deluxe Electric Guitar Alpine White",
    "Squier Limited-Edition Bullet Telecaster Electric Guitar",
    "Fender American Professional Stratocaster Maple Fingerboard Electric Guitar Natural",
    "Gibson ES-335 Figured Semi-Hollow Electric Guitar",
    "Epiphone Limited Edition ES-335 PRO Electric Guitar",
    "Fender Player Stratocaster Maple Fingerboard Limited Edition Electric Guitar",
    "G&L Limited Edition Tribute ASAT Classic Bluesboy Electric Guitar",
    "Fender Custom Shop Sigil Collection Game of Thrones House Targaryen Stratocaster"
]

guitar_images = ["https://cdn11.bigcommerce.com/s-dks6ju/images/stencil/1280x1280/products/4549/42042/1__44520.1413496032.JPG?c=2&imbypass=on",
    "https://images-na.ssl-images-amazon.com/images/I/71ihA-FXCmL._AC_SL1500_.jpg",
    "https://media.sweetwater.com/api/i/q-82__ha-4110b972b285fa64__hmac-0acd31f50f283e1b7c0bb0607051d9990b1cb67c/images/closeup/750-StratAPMNAT_angle.jpg",
    "https://images.reverb.com/image/upload/s--bRtEL2pQ--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_1600,q_80,w_1600/v1522964009/ep8kvrmmipg0srdrtugx.jpg",
    "https://cdn.bestadvisor.com/catalog/9f/19/9f191666d383cbf7b768a48beda62f62_w560.jpg",
    "https://media.musiciansfriend.com/is/image/MMGS7/Player-Stratocaster-Maple-Fingerboard-Limited-Edition-Electric-Guitar-Shell-Pink/L46830000002000-00-1600x1600.jpg",
    "https://media.guitarcenter.com/is/image/MMGS7/J41403000001000-02-1000x1000.jpg",
    "https://images.reverb.com/image/upload/s--yO9qVeo2--/f_auto,t_large/v1566866706/vhfj29dhqaw2ssglg2fy.jpg"
]

guitar_prices = [399.00, 179.99, 1549.99, 3699.99, 499.00, 699.99, 279.99, 35000.00]

guitar_descriptions = [
    "The Epiphone Limited Edition Les Paul Studio Deluxe Electric Guitar Is a dressed up studio edition that gives you all the great tone and sustain you expect from a meaty set-neck mahogany body with 12' radius for strings bends that won't fret out. The addition of Alnico Classic Plus humbuckers gives you even more low-end punch and midrange crunch. The LockTone Tune-O-Matic bridge and stopbar tailpiece add more sustain and make string changing easier. This instrument is a super value offering the great tone, looks, and playability you expect from a Les Paul at an affordable price.",
    
    "The Bullet Tele is a simple, affordable and practical guitar designed for beginners and students. A perfect choice for a first guitar no matter who you are or what style of music you want to learn. Featuring the classic features that made the Tele one of the world’s favorite guitars, the Bullet Tele is a great introduction to the Fender family. Case sold separately.",
    
    "Often copied, but never surpassed, the Stratocaster is arguably the world’s most-loved electric guitar. Electrifying the music world since its debut in 1954, its natural, versatile sound made the Stratocaster the benchmark for exceptional guitar tones. The American Professional Stratocaster isn’t a re-imagining of the classic design; it’s the authentic original model, evolved.
    
    The choice of musical legends since its release, the Stratocaster feel and sound set the world on fire, powering music movements from electric blues to EDM, and everything in-between. In your hands this Strat is ready to navigate the creative twists and turns of your music, inspiring you to express yourself in new ways through your playing.
    
    Developed by pickup master Tim Shaw, the brand-new V-Mod single-coil pickups are voiced specifically for each position, mixing alnico magnet types to produce powerful, nuanced tones with original Fender sonic DNA. Retain high-end clarity when adjusting the volume controls, thanks to the new treble-bleed tone circuit that lets your tone shine through in all its glory. The new modern “Deep C”-shaped neck profile feels just right in your hand while the narrow-tall frets make it easy to bend strings accurately and play perfectly intonated chords.
    
    The best of yesterday and today, the American Professional Stratocaster is the latest form of electric inspiration from Fender. Step up and stake your claim to a legend.",

    "In designing the 2019 line of guitars, Gibson was determined to restate their classic designs. This 'back to the basics' approach is reflected perfectly in the 2019 ES-335. From its introduction in the late '50s, the 335 has been a presence in virtually every musical genre where electric guitars are a means of expression. The preferred tool of greats in blues, jazz, rock, country and more, the 335's warm, woody tone has shown up again and again, proving that some forms, once discovered, are eternal. ",

    "First introduced in the late '50s, the ES series became an instant rock classic, bringing the feel and look of an archtop to a generation of players who had grown up playing solid body guitars like the Les Paul. The ES-335, the first in the ES series, was an instant success. Now Epiphone introduces the ES-335 PRO - an instrument with its roots firmly planted in the classic era when Epiphone's Kalamazoo factory was producing rock's most legendary instruments.
    
    Featuring an ES-style body with Alnico Classic PRO humbucker pickups, this ES-335 PRO semi-hollowbody from Epiphone turns back the clock while breaking new ground in sound and style. Other classic features include a tune-o-matic bridge and stopbar tailpiece for incredible sustain, Wilkinson vintage-style tuning machines, and a pau ferro fretboard adorned with small block inlay.
    
    Case sold separately.",
    
    "Over the decades, players have been continually inspired by the sound of a Strat. From the clarity of the high end, through the gut punch of the mids and the solid lows, it's a sound that's helped define what an electric guitar should be—versatile enough for any style and broad enough for any player to find an individual voice. 

    This Player Series Stratocaster puts all of the classic features of the Strat at your fingertips while adding a modern edge, including a modern neck profile, medium-jumbo frets and a freshly redesigned 2-point fulcrum vibrato bridge. 
    
    With a variety of beautiful gloss finishes over a solid alder body, a 22-fret maple fingerboard with a contemporary 9.5 radius for easy bending, the Player Series Stratocaster is primed and ready to carry you along your musical voyage. Case sold separately.",

    "The G&L ASAT Classic Bluesboy is a factory-modded version of the traditional single-cutaway bolt-on axe. For players looking for the unmistakable warmth of a classic humbucker in the neck position, the Bluesboy delivers with a well-balanced pairing of a G&L alnico humbucker and a single-coil G&L bridge pickup.
    
    Framed in a classic boxed-steel bridge, the single-coil alnico bridge pickup delivers crisp attack with complex harmonics while individual brass saddles offer modern levels of intonation refinement. Flip to the neck ‘bucker and you’ll discover all the charismatic warmth you could ask for. Put them together and you’ll enjoy a whole new level of pleasure.
    
    The Tribute Series ASAT Classic Bluesboy is dripping with mojo at a price attainable for every working musician. This model comes in a special limited-edition finish with a 3-ply white pickguard and maple fretboard. Once you play a G&L Tribute Series, you’ll never look back. Case sold separately.",

    "A smoky, refined twist on a classic, the Sigil Collection Game of Thrones House Targaryen Stratocaster pays tribute to the dynasty who left their mark on the history of the Seven Kingdoms. This bespoke guitar was painstakingly crafted by Principal Master Builder, Ron Thorn, who created the unique “dragon scaled” body in homage to House Targaryen. Crafted to order, this guitar could only have come from Westeros—and the Dream Factory, the Fender Custom Shop. 
    
    Covered with flawlessly carved dragon scales on the front and back, the lightweight alder body features a unique satin “Dragonglass Black” paint, protected with a thin lacquer finish. Three Hand-Wound Texas Special™ single-coil Stratocaster pickups breathe fiery, high-output tone that’s perfect for burning up the stage.
    
    For fast, smooth playing feel and elegant aesthetics, the “Medium C”- shaped maple neck hosts a 9.5”-radius ebony fingerboard with 6150 fretwire for modern playing feel and worry-free bending. The hand-cut and engraved sterling silver dot position markers include an elegant dragon sigil at the first fret; the 12th fret features two throne “O” inlays carved from coral. A work of art on its own, the exquisite hand-tooled and stained leather pickguard boldly bears House Targaryen’s three-headed dragon sigil in all its fiery ferocity. 
    
    Other features include black hardware, five-way switching, custom modern wiring, vintage-style six-screw synchronized tremolo with bent-steel saddles, vintage-style tuning machines and bone nut. The Sigil Collection Game of Thrones House Targaryen Stratocaster includes a custom reptilian embossed leather hardshell case with matching strap and Certificate of Authenticity."
]

guitar_list = [
    [guitars_names[0], guitar_descriptions[0], guitar_prices[0], guitar_images[0], true],
    [guitars_names[1], guitar_descriptions[1], guitar_prices[1], guitar_images[1], true],
    [guitars_names[2], guitar_descriptions[2], guitar_prices[2], guitar_images[2], true],
    [guitars_names[3], guitar_descriptions[3], guitar_prices[3], guitar_images[3], true],
    [guitars_names[4], guitar_descriptions[4], guitar_prices[4], guitar_images[4], true],
    [guitars_names[5], guitar_descriptions[5], guitar_prices[5], guitar_images[5], true],
    [guitars_names[6], guitar_descriptions[6], guitar_prices[6], guitar_images[6], true],
    [guitars_names[7], guitar_descriptions[7], guitar_prices[7], guitar_images[7], true]
]

guitar_list.each do |name, description, price, image, instock|
    Guitar.create(name: name, description: description, price: price, image: image, in_stock: instock )
end
