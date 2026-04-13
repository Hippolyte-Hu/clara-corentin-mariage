export type Language = 'fr' | 'en' | 'it';

export const languageLabels: Record<Language, string> = {
  fr: 'FR',
  en: 'EN',
  it: 'IT',
};

export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      program: 'Programme',
      map: 'Lieu',
      rsvp: 'RSVP',
      faq: 'Infos',
      reply: 'Répondre',
      menu: 'Menu',
    },
    hero: {
      announcement: 'Nous nous marions !',
      subtitle: 'Entre Paris & Palerme',
      date: '20 Juin 2026',
      scrollLabel: 'Voir le programme',
      backgroundAlt: "Fond d'écran",
    },
    program: {
      title: 'Le Programme',
      subtitle: 'Le déroulé de cette journée inoubliable',
      events: [
        {
          time: '14:00',
          title: 'Mairie',
          description: 'Rendez-vous à la Mairie du 11ème arrondissement pour le mariage civil.',
          icon: 'landmark',
        },
        {
          time: '16:00',
          title: 'Cérémonie Laïque',
          description: 'Échange des vœux dans les jardins du Domaine de Longchamp.',
          icon: 'church',
        },
        {
          time: '17:30',
          title: "Vin d'Honneur",
          description: 'Cocktail, photos et lancer de bouquet.',
          icon: 'wine',
        },
        {
          time: '20:00',
          title: 'Dîner & Soirée',
          description: "Repas gastronomique suivi d'une nuit de folie sur le dancefloor.",
          icon: 'music',
        },
      ],
    },
    map: {
      title: 'Le Lieu',
      venue: 'Domaine de Longchamp',
      description: 'Nous avons choisi un lieu magique au cœur du Bois de Boulogne. Un espace de nature préservé à Paris pour célébrer notre union. Des places de parking sont disponibles sur place, et le lieu est accessible en navette depuis la Porte Maillot.',
      directions: 'Itinéraire',
      mapTitle: 'Carte du lieu',
    },
    rsvp: {
      eyebrow: "Répondez s'il vous plaît",
      title: 'Serez-vous des nôtres ?',
      subtitle: 'Merci de confirmer votre présence avant le 1er Mai 2026',
      successTitle: 'Merci !',
      successMessage: 'Votre réponse a bien été enregistrée.',
      sendAnother: 'Envoyer une autre réponse',
      labels: {
        name: 'Vos Noms & Prénoms',
        email: 'Email',
        attendance: 'Présence',
        guests: "Nombre d'adultes",
        dietary: 'Restrictions alimentaires',
        song: 'Une chanson qui vous fait danser ?',
      },
      placeholders: {
        name: 'ex: Jean & Marie Dupont',
        email: 'jean.dupont@email.com',
        dietary: 'Végétarien, allergies, sans gluten...',
        song: 'Earth, Wind & Fire - September',
      },
      attendanceOptions: {
        yes: 'Avec plaisir !',
        no: 'Malheureusement non',
      },
      submitting: 'Envoi...',
      submit: 'Envoyer ma réponse',
      footnote: "* En cliquant, vous simulez l'envoi d'un email aux mariés.",
    },
    registry: {
      title: 'Liste de Mariage',
      description: 'Votre présence est le plus beau des cadeaux. Si vous souhaitez toutefois nous gâter, nous avons mis en place une cagnotte pour notre voyage de noces au Japon.',
      cta: 'Participer à la cagnotte',
    },
    faq: {
      title: 'Questions Fréquentes',
      items: [
        {
          question: 'Y a-t-il un dress code ?',
          answer: "Nous souhaitons une ambiance 'Élégance Champêtre'. Costumes décontractés chics pour les hommes (la cravate n'est pas obligatoire), robes colorées ou fleuries pour les dames. Évitez simplement le blanc !",
        },
        {
          question: 'Les enfants sont-ils invités ?',
          answer: 'Nous adorons vos enfants, mais nous avons choisi de célébrer notre mariage entre adultes pour que tout le monde puisse profiter pleinement de la soirée. Merci de votre compréhension.',
        },
        {
          question: 'Où se garer ?',
          answer: "Le Domaine dispose d'un parking privé gratuit de 50 places. Nous vous encourageons néanmoins à privilégier le covoiturage ou les taxis pour profiter de la fête en toute sécurité.",
        },
        {
          question: 'Peut-on prendre des photos ?',
          answer: "Pendant la cérémonie, nous souhaitons une ambiance 'déconnectée' : rangez vos téléphones et profitez du moment avec nous ! Notre photographe s'occupe de tout. Pour la soirée, faites-vous plaisir !",
        },
      ],
    },
    footer: {
      message: 'Nous avons hâte de célébrer avec vous !',
      madeWithLove: 'Fait avec amour pour notre mariage.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      program: 'Schedule',
      map: 'Venue',
      rsvp: 'RSVP',
      faq: 'Info',
      reply: 'Reply',
      menu: 'Menu',
    },
    hero: {
      announcement: 'We are getting married!',
      subtitle: 'Between Paris & Palermo',
      date: 'June 20, 2026',
      scrollLabel: 'View the schedule',
      backgroundAlt: 'Background image',
    },
    program: {
      title: 'The Schedule',
      subtitle: 'How this unforgettable day will unfold',
      events: [
        {
          time: '2:00 PM',
          title: 'Town Hall',
          description: 'Meet us at the 11th arrondissement town hall for the civil ceremony.',
          icon: 'landmark',
        },
        {
          time: '4:00 PM',
          title: 'Symbolic Ceremony',
          description: 'We will exchange our vows in the gardens of Domaine de Longchamp.',
          icon: 'church',
        },
        {
          time: '5:30 PM',
          title: 'Cocktail Hour',
          description: 'Cocktails, photos, and the bouquet toss.',
          icon: 'wine',
        },
        {
          time: '8:00 PM',
          title: 'Dinner & Party',
          description: 'A refined dinner followed by a joyful night on the dance floor.',
          icon: 'music',
        },
      ],
    },
    map: {
      title: 'The Venue',
      venue: 'Domaine de Longchamp',
      description: 'We chose a magical venue in the heart of the Bois de Boulogne. A preserved natural setting in Paris to celebrate our union. Parking is available on site, and shuttles can reach the venue from Porte Maillot.',
      directions: 'Get directions',
      mapTitle: 'Venue map',
    },
    rsvp: {
      eyebrow: 'Please reply',
      title: 'Will you join us?',
      subtitle: 'Please confirm your attendance before May 1, 2026',
      successTitle: 'Thank you!',
      successMessage: 'Your reply has been recorded successfully.',
      sendAnother: 'Send another reply',
      labels: {
        name: 'Your full names',
        email: 'Email',
        attendance: 'Attendance',
        guests: 'Number of adults',
        dietary: 'Dietary requirements',
        song: 'A song that gets you dancing?',
      },
      placeholders: {
        name: 'e.g. John & Mary Smith',
        email: 'john.smith@email.com',
        dietary: 'Vegetarian, allergies, gluten-free...',
        song: 'Earth, Wind & Fire - September',
      },
      attendanceOptions: {
        yes: 'With pleasure!',
        no: 'Sadly, no',
      },
      submitting: 'Sending...',
      submit: 'Send my reply',
      footnote: '* Clicking here simulates sending an email to the couple.',
    },
    registry: {
      title: 'Wedding Registry',
      description: 'Your presence is the greatest gift of all. If you would still like to spoil us, we have set up a contribution fund for our honeymoon in Japan.',
      cta: 'Contribute to the fund',
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'Is there a dress code?',
          answer: "We are aiming for a 'Country Elegance' atmosphere. Smart relaxed suits for gentlemen, colorful or floral dresses for ladies. Please simply avoid white.",
        },
        {
          question: 'Are children invited?',
          answer: 'We adore your children, but we have chosen to celebrate our wedding with adults only so everyone can fully enjoy the evening. Thank you for understanding.',
        },
        {
          question: 'Where can we park?',
          answer: 'The venue has a free private car park with 50 spaces. We still encourage car sharing or taxis so everyone can enjoy the party safely.',
        },
        {
          question: 'Can we take photos?',
          answer: 'During the ceremony, we would love an unplugged atmosphere, so please put your phones away and enjoy the moment with us. Our photographer will take care of everything. For the party, have fun!',
        },
      ],
    },
    footer: {
      message: 'We cannot wait to celebrate with you!',
      madeWithLove: 'Made with love for our wedding.',
    },
  },
  it: {
    nav: {
      home: 'Home',
      program: 'Programma',
      map: 'Luogo',
      rsvp: 'RSVP',
      faq: 'Info',
      reply: 'Rispondi',
      menu: 'Menu',
    },
    hero: {
      announcement: 'Ci sposiamo!',
      subtitle: 'Tra Parigi e Palermo',
      date: '20 Giugno 2026',
      scrollLabel: 'Scopri il programma',
      backgroundAlt: 'Immagine di sfondo',
    },
    program: {
      title: 'Il Programma',
      subtitle: 'Come si svolgerà questa giornata indimenticabile',
      events: [
        {
          time: '14:00',
          title: 'Municipio',
          description: 'Ci ritroveremo al municipio dell’11° arrondissement per il matrimonio civile.',
          icon: 'landmark',
        },
        {
          time: '16:00',
          title: 'Cerimonia Laica',
          description: 'Ci scambieremo le promesse nei giardini del Domaine de Longchamp.',
          icon: 'church',
        },
        {
          time: '17:30',
          title: 'Aperitivo',
          description: 'Cocktail, foto e lancio del bouquet.',
          icon: 'wine',
        },
        {
          time: '20:00',
          title: 'Cena e Festa',
          description: 'Una cena raffinata seguita da una splendida serata sulla pista da ballo.',
          icon: 'music',
        },
      ],
    },
    map: {
      title: 'Il Luogo',
      venue: 'Domaine de Longchamp',
      description: 'Abbiamo scelto un luogo magico nel cuore del Bois de Boulogne. Uno spazio naturale preservato a Parigi per celebrare la nostra unione. Il parcheggio è disponibile in loco e il luogo è raggiungibile anche con navetta da Porte Maillot.',
      directions: 'Indicazioni',
      mapTitle: 'Mappa del luogo',
    },
    rsvp: {
      eyebrow: 'Per favore rispondete',
      title: 'Sarete dei nostri?',
      subtitle: 'Vi chiediamo di confermare la vostra presenza entro il 1° maggio 2026',
      successTitle: 'Grazie!',
      successMessage: 'La vostra risposta è stata registrata correttamente.',
      sendAnother: 'Invia un’altra risposta',
      labels: {
        name: 'Nomi e cognomi',
        email: 'Email',
        attendance: 'Presenza',
        guests: 'Numero di adulti',
        dietary: 'Esigenze alimentari',
        song: 'Una canzone che vi fa ballare?',
      },
      placeholders: {
        name: 'es: Luca e Maria Rossi',
        email: 'luca.rossi@email.com',
        dietary: 'Vegetariano, allergie, senza glutine...',
        song: 'Earth, Wind & Fire - September',
      },
      attendanceOptions: {
        yes: 'Con piacere!',
        no: 'Purtroppo no',
      },
      submitting: 'Invio...',
      submit: 'Invia la mia risposta',
      footnote: '* Cliccando qui simulate l’invio di una mail agli sposi.',
    },
    registry: {
      title: 'Lista Nozze',
      description: 'La vostra presenza è il regalo più bello. Se desiderate comunque farci un pensiero, abbiamo creato una raccolta per il nostro viaggio di nozze in Giappone.',
      cta: 'Partecipa alla raccolta',
    },
    faq: {
      title: 'Domande Frequenti',
      items: [
        {
          question: 'C’è un dress code?',
          answer: 'Vorremmo un’atmosfera di elegante campagna. Abiti chic ma rilassati per gli uomini, abiti colorati o floreali per le donne. Vi chiediamo solo di evitare il bianco.',
        },
        {
          question: 'I bambini sono invitati?',
          answer: 'Adoriamo i vostri bambini, ma abbiamo scelto di celebrare il nostro matrimonio solo con adulti, così che tutti possano godersi al meglio la serata. Grazie per la comprensione.',
        },
        {
          question: 'Dove si parcheggia?',
          answer: 'Il Domaine dispone di un parcheggio privato gratuito con 50 posti. Vi consigliamo comunque di privilegiare car sharing o taxi per godervi la festa in tutta sicurezza.',
        },
        {
          question: 'Possiamo fare foto?',
          answer: 'Durante la cerimonia desideriamo un’atmosfera senza telefoni: mettete via i cellulari e vivete il momento con noi. Il nostro fotografo penserà a tutto. Per la festa, divertitevi pure!',
        },
      ],
    },
    footer: {
      message: 'Non vediamo l’ora di festeggiare con voi!',
      madeWithLove: 'Creato con amore per il nostro matrimonio.',
    },
  },
} as const;
