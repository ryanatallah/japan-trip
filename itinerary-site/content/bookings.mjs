// Reconciled November 2 California time; Toyota confirmation added November 8 Japan time.
// Sources are message links, never payment, cancellation or authentication links.
export const bookingReview = '10 November 2026 (sushi and workshops; other items retain prior review)';

const mail = (id) => `https://mail.google.com/mail/u/?authuser=ryan%40ha.family#all/${id}`;

export const bookings = [
  {
    "day": "Wed 11 – Tue 17",
    "time": "10:30 pickup → 16:00 return",
    "name": "Toyota Rent a Car · Lexus RX Hybrid LXC2",
    "status": "Confirmed · online payment selected",
    "tone": "confirmed",
    "detail": "Reservation 99950312100. November 11 10:30 pickup: Tokyo Sta. Nihonbashi Ext. Shop, Trust Tower N Wing B2, 1-8-1 Marunouchi; 03-5220-2220. November 17 16:00 return: Horikawa Shop, 503-1 Anenishihorikawa-cho, Kyoto. ¥392,716 incl. tax, including ¥37,950 one-way surcharge and ¥23,100 winter-equipment line. Automatic, non-smoking; winter tires required, 4WD not required. Compensation, NOC exemption, car-model option and ETC card selected; card supply subject to availability. Online credit-card payment selected, not evidence of a settled charge. Covers Tokyo → Nikko → Izu → Kyoto and local driving during the rental; later Kyoto / Aioi / KIX travel remains separate.",
    "source": "https://mail.google.com/mail/u/?authuser=ryan%40ha.family#all/1a1b8339689d2dde"
  },
  {
    "day": "Sun 8",
    "time": "14:00",
    "name": "Akiba Fukurou owl café",
    "status": "Paid",
    "tone": "confirmed",
    "detail": "Two adults; ¥7,600 paid. Arrive by 13:50; late entry is not permitted.",
    "source": "https://mail.google.com/mail/u/?authuser=ryan%40ha.family#all/1a1623473174a78e"
  },
  {
    "day": "Sun 8",
    "time": "18:30",
    "name": "est",
    "status": "Confirmed · guarantee to verify",
    "tone": "confirmed",
    "detail": "Two adults; 9-course est menu, ¥32,000 each. Full dietary adaptation accepted. The confirmation asks for a card guarantee; completion is not evidenced in email. No move to November 9 is confirmed.",
    "source": "https://mail.google.com/mail/u/?authuser=ryan%40ha.family#all/1a1052badd615d07"
  },
  {
    "day": "Mon 9",
    "time": "09:30",
    "name": "Kyudo Japan · Yosui",
    "status": "Paid · confirmed",
    "tone": "confirmed",
    "detail": "Two participants, ¥40,000 total paid by Stripe per invoice SI-2026000041. Confirm the actual dojo address, arrival instructions and finish time; the invoice contact address is not established as the venue.",
    "source": "https://mail.google.com/mail/u/?authuser=ryan%40ha.family#all/1a19f4c02be33589"
  },
  {
    "day": "Tue 10",
    "time": "17:30–20:00",
    "name": "NARISAWA",
    "status": "Confirmed · dietary reply needed",
    "tone": "confirmed",
    "detail": "Two guests, table, Chef’s Tasting Course. Ashly’s restrictions were submitted with the booking; a separate kitchen acceptance was not found.",
    "source": "https://mail.google.com/mail/u/?authuser=ryan%40ha.family#all/1a10327780791e51"
  },
  {
    "day": "Sat 14 – Mon 16",
    "time": "Seatings to agree",
    "name": "Asaba dinners and breakfasts",
    "status": "Included · stay prepaid",
    "tone": "confirmed",
    "detail": "Three nights confirmed and prepaid. Gluten-free meals accepted in August; November 1 email requests final dietary details, arrival time and transport. November 14 drum performance is included in the prepayment request; confirm its time.",
    "source": "https://mail.google.com/mail/u/?authuser=ryan%40ha.family#all/1a196f26ccd34b86"
  },
  {
    "day": "Wed 18",
    "time": "18:00",
    "name": "Sushi Iwa · Kyoto",
    "status": "Confirmed · meal payable at venue",
    "tone": "confirmed",
    "detail": "Confirmed November 18 at 18:00 for two, non-smoking counter, under Atallah Ryan. Course listed at ¥34,650 per person (¥69,300 for two); meal payable at the restaurant. AutoReserve fee ¥8,640 paid separately. Cancellation within 48 hours: 100% plus 10% handling fee. Dietary adaptation and cooked alternatives are not established by this confirmation. Address: Shimo-Tsumekasuyamachi-dori, Kawaramachi, Shimogyo Ward; 075-371-9303.",
    "source": "https://mail.google.com/mail/u/?authuser=ryan%40ha.family#all/1a1bb5cc3fb6856e"
  },
  {
    "day": "Thu 19",
    "time": "14:00–16:00",
    "name": "Mio Heki kintsugi · Akagane",
    "status": "Confirmed · paid",
    "tone": "confirmed",
    "detail": "Confirmed and paid: November 19, 14:00–16:00, two participants at Akagane Resort Kyoto Higashiyama 1925, 400-1 Kinencho. Wabunka booking 25636; ¥121,770 including real gold for both and English interpretation. Arrive on time; over 15 minutes late is a no-show without refund. Cancellation charges apply from November 9 at 14:00 JST; rescheduling is no longer allowed.",
    "source": "https://mail.google.com/mail/u/?authuser=ryan%40ha.family#all/1a1b4a8aeb17850e"
  },
  {
    "day": "Fri 20",
    "time": "13:30–17:30",
    "name": "Kikyo Hayamitsu Forge · Aioi, Hyogo",
    "status": "Confirmed · payment to verify",
    "tone": "confirmed",
    "detail": "Confirmed by the separate November 3 AirRESERVE email: November 20, 13:30–17:30, two participants, ¥112,000 including tax, booking 105PHCHAG. Payment is not evidenced. Arrange language support, arrival requirements, Kyoto–Aioi trains and both taxis.",
    "source": "https://mail.google.com/mail/u/?authuser=ryan%40ha.family#all/1a1a011891931a29"
  },
  {
    "day": "Sat 21",
    "time": "18:30",
    "name": "Restaurant Hiramatsu Kodaiji",
    "status": "Confirmed",
    "tone": "confirmed",
    "detail": "Two adults; Koudaiji course, ¥72,600 total, pay at venue. Dietary adaptation accepted and recorded. Prearrange the hotel car; allow time to return and change before dinner.",
    "source": "https://mail.google.com/mail/u/?authuser=ryan%40ha.family#all/1a103334fdd392c7"
  },
  {
    "day": "Sat 7",
    "time": "10:00 offered",
    "name": "Aman spa",
    "status": "Offer · not accepted",
    "tone": "pending",
    "detail": "90-minute hot stone and Grounding Massage Ritual offered for two, subject to availability. Nourishing Ritual is full that morning. No acceptance or final spa confirmation found.",
    "source": "https://mail.google.com/mail/u/?authuser=ryan%40ha.family#all/1a18fcb092878cb3"
  },
  {
    "day": "Tue 10 preferred",
    "time": "Morning requested",
    "name": "TOKYO LUXEY sword making · Kamakura",
    "status": "Quoted backup · not accepted",
    "tone": "pending",
    "detail": "Aman’s November 3 reply places the experience in Kamakura. Sample 10:00–18:30 day with 13:30–15:00 workshop; ¥400,000 excluding tax for two including eight-hour car and English guide. Not booked; the sample return conflicts with NARISAWA at 17:30. Hayamitsu is confirmed.",
    "source": "https://mail.google.com/mail/u/?authuser=ryan%40ha.family#all/1a1a1668a2e763fc"
  },
  {
    "day": "Tue 17 / Thu 19",
    "time": "13:00 / 09:00 requested",
    "name": "Masahiro Sword Forge · Kameoka",
    "status": "Direct booking required · no reservation",
    "tone": "pending",
    "detail": "Mitsui replied November 6 that Masahiro does not accept third-party concierge reservations; book directly by website or phone if still wanted. Hayamitsu November 20 is confirmed, so avoid a duplicate.",
    "source": "https://mail.google.com/mail/u/?authuser=ryan%40ha.family#all/1a1b06c43a2aa777"
  },
  {
    "day": "Mon 9 option",
    "time": "16:15–17:45 if booked",
    "name": "Picchio flying squirrels",
    "status": "Unbooked option",
    "tone": "open",
    "detail": "No confirmation found. November 8 conflicts with est after return travel. November 9 could work only after the archery finish and dojo location are known, with reserved trains and local transfers. Published tour time is not seat availability.",
    "url": "https://picchio.co.jp/tour/flying-squirrel"
  },
  {
    "day": "Wed 11 – Fri 13",
    "time": "Unconfirmed",
    "name": "Ritz-Carlton Nikko dinners",
    "status": "Not booked",
    "tone": "open",
    "detail": "Proposed: Lakehouse November 11; teppanyaki November 12; sushi November 13. Confirm each counter’s service and dietary acceptance; no dinner confirmations found. Hotel activity / hiking inquiry sent October 30 is also awaiting a reply.",
    "source": "https://mail.google.com/mail/u/?authuser=ryan%40ha.family#all/1a18fcb7059c81fd"
  },
  {
    "day": "Tue 17 – Fri 20",
    "time": "Unconfirmed",
    "name": "Remaining Kyoto dinners",
    "status": "Not booked",
    "tone": "open",
    "detail": "Sushi Iwa November 18 at 18:00 and Hiramatsu November 21 at 18:30 are confirmed. November 17, 19 and 20 remain open; Mitsui authorization form submission is not evidenced.",
    "source": "https://mail.google.com/mail/u/?authuser=ryan%40ha.family#all/1a19d76a8beaf28b"
  },
  {
    "day": "Thu 19",
    "time": "Slot to obtain",
    "name": "Rurikoin",
    "status": "Reservation needed",
    "tone": "open",
    "detail": "Reservation required November 13–December 6. No ticket found; Ohara remains workable without this stop.",
    "url": "https://rurikoin.komyoji.com/"
  },
  {
    "day": "Sun 22",
    "time": "11:30 proposed",
    "name": "FORNI departure lunch",
    "status": "Not booked",
    "tone": "open",
    "detail": "Obtain dietary acceptance and finish by about 13:00 for the planned 13:30 airport departure. Takeaway is an alternative if timing changes.",
    "url": "https://www.hotelthemitsui.com/en/kyoto/restaurants-bar/forni/"
  }
];

export const unavailable = [
  { name: 'Hirata small-katana workshop', detail: 'November 9, 13:00–15:30 request 25635 declined November 2. ¥385,000 authorization released; no charge. Removed from the active schedule.', source: mail('1a19b4ce51e9e06d') },
  { name: 'L’Effervescence · Myojaku · L’Osier', detail: 'Full on requested Tokyo dates per Aman’s October 2 reply. Replaced in the active dining plan by the actual est and NARISAWA confirmations.', source: mail('1a0fb857993fc9a2') },
  { name: 'Sazenka', detail: 'November 7 and 10 full; November 8 and 9 closed, per October 6 reply. No active reservation.', source: mail('1a10f17f35e0981f') },
  { name: 'Kikunoi Honten dinners', detail: 'Requested November 18–21 dinners full per September 29 reply. Removed as a fixed dinner; no lunch reservation established.', source: mail('1a0eb4a2e6db41a8') },
  { name: 'ESqUISSE', detail: 'Unable to accommodate regular-soy-sauce avoidance per Aman. Removed from the active options.', source: mail('1a0fb857993fc9a2') },
  { name: 'Kodaiji Jugyuan', detail: 'No trip-date online tables found in prior checks; total sellout not established. Hiramatsu is the confirmed farewell dinner. Jugyuan is not a booking to attend.', url: 'https://www.tablecheck.com/en/shops/koudaiji-jugyuan/reserve' },
];
