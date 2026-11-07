// Reconciled November 2 California time; Toyota confirmation added November 8 Japan time.
// Sources are message links, never payment, cancellation or authentication links.
export const bookingReview = '8 November 2026 Japan time (rental); other reservations reviewed 2 November California time';
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
    "day": "Thu 19",
    "time": "Time to confirm",
    "name": "Mio Heki kintsugi · Akagane",
    "status": "Move requested · awaiting host",
    "tone": "pending",
    "detail": "Ryan’s November 2 email says November 19 is now the only available date; November 20 is unavailable. Wabunka request 25636 remains pending, with no new time or host acceptance. Earlier ¥121,770 quote includes real gold for two; price/payment for the revised date is not confirmed.",
    "source": "https://mail.google.com/mail/u/?authuser=ryan%40ha.family#all/1a19fb1f5e781139"
  },
  {
    "day": "Fri 20",
    "time": "13:30–17:30",
    "name": "Kikyo Hayamitsu Forge · Aioi, Hyogo",
    "status": "Provisional reservation · host confirmation pending",
    "tone": "pending",
    "detail": "Two participants; tamahagane sword-knife workshop, ¥56,000 each, ¥112,000 total including tax. AirRESERVE email explicitly says this is a provisional reservation and a separate confirmation will follow. Payment is not evidenced. Protect the workshop and Kyoto–Aioi travel blocks; this is a Hyogo excursion, not a Kyoto-city activity.",
    "source": "https://mail.google.com/mail/u/?authuser=ryan%40ha.family#all/1a19fb09184fe4f4"
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
    "name": "Akihira sword making · Saitama",
    "status": "Earlier inquiry · backup only",
    "tone": "pending",
    "detail": "TOKYO LUXEY alternative; November 8 is a fallback requiring changes around the paid owl café and est. Available times and quotation requested before booking; no host reply or booking yet. Hayamitsu November 20 is now the scheduled priority. No withdrawal of this earlier inquiry is evidenced; coordinate before accepting a duplicate workshop.",
    "source": "https://mail.google.com/mail/u/?authuser=ryan%40ha.family#all/1a19f59098cd1853"
  },
  {
    "day": "Tue 17 / Thu 19",
    "time": "13:00 / 09:00 requested",
    "name": "Masahiro Sword Forge · Kameoka",
    "status": "Earlier inquiry · backup only",
    "tone": "pending",
    "detail": "Private two-person kogatana workshop with interpreter. November 17 depends on a feasible direct station transfer and luggage handling; November 19 is an alternative. No availability, price or booking confirmed. Hayamitsu November 20 is now the scheduled priority. No withdrawal of this earlier inquiry is evidenced; coordinate before accepting a duplicate workshop.",
    "source": "https://mail.google.com/mail/u/?authuser=ryan%40ha.family#all/1a19dee33027b2c7"
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
    "detail": "TOKI on November 17 and Japanese tasting menus November 18–20 remain requests or options. Return Mitsui’s authorization form; the November 2 reply says it will be returned, which does not establish that it has been submitted.",
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
