# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# new_order = Order.new(order_num: 0001, item_num: 1)

# new_cart = Cart.new(item_num: 1, orders: [new_order])

# User.create!({ email: 'bobt@ga.nonprofit.tech', password_digest: '$2b$10$Mzx6sac2E2Ue11hfUeJbg.52zESy5nwtV4q.0YmaK4zdZk1aQGhba', fname: 'Bobby', lname: 'Talley', address: '123 Apple St Lincoln, NE 68509', cart: new_cart})

item_1_specs = {material: "Steel", width: "41.5mm", height: "12mm", movement: "ETA 2824/2"}.to_json
item_1_images = ({image_links: ["https://res.cloudinary.com/wristing/image/upload/v1520982221/bejjyhnz7o27tbooq8v9.jpg",
"https://res.cloudinary.com/wristing/image/upload/v1521077193/eyh4ww2unidwbubrbloi.jpg",
"https://res.cloudinary.com/wristing/image/upload/v1521077193/plhnzgh1i5bzixmlkqo0.jpg",
"https://res.cloudinary.com/wristing/image/upload/v1521077193/miahvpl9govvbqi4xpgi.jpg",
"https://res.cloudinary.com/wristing/image/upload/v1521077192/y9xvwveyg2hrwejjirse.jpg",
"https://res.cloudinary.com/wristing/image/upload/v1521077192/ra8v5bz7fnk3ib98vukk.jpg",
"https://res.cloudinary.com/wristing/image/upload/v1521077192/jecqqo5vj4xvdz5efqh5.jpg",
"https://res.cloudinary.com/wristing/image/upload/v1521077192/fzqkybhs1sfg9mjndv3a.jpg",
"https://res.cloudinary.com/wristing/image/upload/v1521077192/hmg9pm3qpzllkha7s2pr.jpg",
"https://res.cloudinary.com/wristing/image/upload/v1521077195/hzxbd0a02mxjn0jczpo2.jpg",
]}).to_json

item_2_specs = ([{material: "Platinum", width: "40mm", height: "9mm", movement: "Caliber 1403"}]).to_json
item_2_images = ({image_links: ["https://res.cloudinary.com/wristing/image/upload/v1521035146/ruxm4hexkmspfxxneeez.jpg", "https://res.cloudinary.com/wristing/image/upload/v1521120672/xzbysbpxrkfkk7ympfg9.jpg", "https://res.cloudinary.com/wristing/image/upload/v1521120672/g8ioy5dhavvoino0wbga.png"]}).to_json

item_3_specs = ([{material: "Steel", width: "39.5mm", height: "11mm", movement: "Caliber 1570"}]).to_json
item_3_images = ({image_links: ["https://res.cloudinary.com/wristing/image/upload/v1521035455/svexufritv9bfherrj7r.jpg", "https://res.cloudinary.com/wristing/image/upload/v1521121033/twvhhrpgdtljpwnaqjit.jpg", "https://res.cloudinary.com/wristing/image/upload/v1521121033/hupypc2qyovgin07bkij.jpg", "https://res.cloudinary.com/wristing/image/upload/v1521121033/jcdjprhogshgzl0rj52d.jpg", "https://res.cloudinary.com/wristing/image/upload/v1521121034/bhuzvnakxjfk4px5rjok.jpg"]}).to_json

item_4_specs = ([{material: "18k Gold", width: "40.5mm", height: "11mm", movement: "Caliber CH 28-520C"}]).to_json
item_4_images = ({image_links: ["https://res.cloudinary.com/wristing/image/upload/v1521161368/4747507_xxl.jpg", "https://res.cloudinary.com/wristing/image/upload/v1521161368/4747507b_xxl.jpg", "https://res.cloudinary.com/wristing/image/upload/v1521161368/4747507d_xxl.jpg", "https://res.cloudinary.com/wristing/image/upload/v1521161368/jb7vv9aeqtqy.jpg"]}).to_json

item_5_specs = ([{material: "Steel", width: "37mm", height: "9.8mm", movement: "Caliber 3120"}]).to_json
item_5_images = ({image_links: ["https://res.cloudinary.com/wristing/image/upload/v1521162102/s-l1600.jpg", "https://res.cloudinary.com/wristing/image/upload/v1521162102/s-l1600-1.jpg", "https://res.cloudinary.com/wristing/image/upload/v1521162102/s-l1600-3.jpg", "https://res.cloudinary.com/wristing/image/upload/v1521162102/s-l1600-2.jpg"]}).

item_6_specs = ([{material: "18k Gold", width: "36mm", height: "8mm", movement: "Caliber 240Q"}]).to_json
item_6_images = ({image_links: ["https://res.cloudinary.com/wristing/image/upload/v1521162687/937-PatekPhilippe-A.jpg", "https://res.cloudinary.com/wristing/image/upload/v1521162687/937-PatekPhilippe-C.jpg", "https://res.cloudinary.com/wristing/image/upload/v1521162686/937-PatekPhilippe-B.jpg", "https://res.cloudinary.com/wristing/image/upload/v1521162687/937-PatekPhilippe3940-Movement.jpg", "https://res.cloudinary.com/wristing/image/upload/v1521162687/3H0A5661_copy.jpg", "https://res.cloudinary.com/wristing/image/upload/v1521162687/3H0A5658_copy.jpg", "https://res.cloudinary.com/wristing/image/upload/v1521162688/937-PatekPhilippe3940-Lifestyle.jpg"]}).to_json

Item.create!({item_num: 1, name: "Ressence Type 1H Limited Edition", description: "We’re very excited to show you all our latest collaboration. Sometimes when you put a watch on your wrist and look down, you know immediately that something special is staring back at you. This is the Ressence Type 1H Limited Edition For HODINKEE and it’s a true first in a number of important ways.", price: 22500, specs: item_1_specs, image: item_1_images, availability: true})

Item.create!({item_num: 2, name: "F.P. Journe Tourbillon Souverain", description: " F.P. Journe Tourbillon Souverain wristwatch, featuring the F.P. Journe Caliber 1403 mechanical manual movement in decorated rose gold; 18k white gold dial with off-center silver hours and minutes dial with guilloché center and painted black Arabic numerals; tourbillon with constant force escapement and dead seconds; small seconds silver subdial at 6 o'clock; power reserve indicator at 12 o'clock; sapphire-crystal, exhibition case back.", price: 78500, specs: item_2_specs, image: item_2_images, availability: true})

Item.create!({item_num: 3, name: "Rolex Submariner 5512", description: "This desirable reference 5512 features a \"meters first\" dial showing the first signs of turning tropical. The overall soft patina makes this vintage Submariner a must.", price: 13200, specs: item_3_specs, image: item_3_images, availability: true})

Item.create!({item_num: 4, name: "Patek Philippe Nautilus Chronograph 5980R", description: "Never worn, unused and fully brand-new 18K rose-gold watch. Gold bracelet with Nautilus fold-over clasp. The black gradient dial has gold applied hour markers. Screw-down crown. Sapphire crystal case back. Self-winding Caliber CH 28-520C movement with date, chronograph, 60 min. and 12 h. monocounter at 6 o'clock.", price: 88200, specs: item_4_specs, image: item_4_images, availability: true})

Item.create!({item_num: 5, name: "Audemars Piguet Royal Oak 15450", description: "37 mm stainless steel case, 9.8 mm thick, glareproofed sapphire crystal back, screw-locked crown, glareproofed sapphire crystal, silver-toned dial with Grande Tapisserie pattern, white gold applied hour-markers and Royal Oak hands with luminescent coating, Calibre 3120 selfwinding movement with dive-time measurement, hours, minutes, center seconds and date, approximately 60 hours of power reserve, stainless steel bracelet, AP folding buckle. Water resistant to 50 meters.", price: 16200, specs: item_5_specs, image: item_5_images, availability: true})

Item.create!({item_num: 6, name: "Patek Philippe 3940J", description: "An early, second-series 3940J with its original paperwork is a watch worth a second look (or a third).
", price: 32200, specs: item_6_specs, image: item_6_images, availability: true})


