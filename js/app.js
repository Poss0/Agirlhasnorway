(function()
{
	var app = angular.module('homeApp',['ngMaterial']);

	app.controller('homeCtrl',function($scope){
    window.sr = ScrollReveal();
    sr.reveal('.reveal');

		$scope.articles = [
			{
				id: "1",
				title: "Top départ",
				date: "11 août",
				html: [
					"Check bagages...ok",
					"Check passeport...ok",
					"Check miroir...euh...j'ai l'air d'un zombie...",
					"Check montre...4h30",
					"Check miroir...ah ok !",
					"",
					"Un dernier regard à la maison avant de monter dans la voiture. Puis le paysage défile dans la nuit. Daft Punk passe à la radio, et des infos françaises aussi. La route n'est pas éclairée, les entrepôts si ; c'est bizarre mais tant pis. Impossible de dormir. L'excitation a remplacé l'angoisse. Le soleil se lève, doucement. Paris endormie se réveille lentement. Pour une fois je le vis, cet instant. Ce calme.",
					"Avant le tumulte de l'aéroport. Le tumulte extérieur, certes ; le bruit, l'agitation, une multitude d'informations. Mais le tumulte intérieur surtout. N'ai-je rien oublié ? Suis-je au bon endroit pour embarquer ? Tout va-t-il bien se passer ? Les angoisses de la veille laissent place à de nouvelles, plus réalistes, plus imminentes. Je fuis le regard de ma maman, qui, si elle ne m'a pas lâchée des yeux jusqu'au dernier moment, reste forte pour me laisser partir sereinement.",
					"Puis viennent les contrôles : bagages, portiques, stress, identité. Ah non, le stress lui n'est pas contrôlé. Il y a de l'attente et pourtant, tout se passe très vite. Respire. On entend une dernière annonce en français. Ensuite, tout se passera en anglais.",
					"",
					"Nous voilà embarqués. D'autres avions décollent ; l'accération à leur départ est impressionnante. C'est à notre tour. L'avion prend de la vitesse, puis, en douceur, quitte le sol. C'est tout petit en bas. On dirait une maquette. Une pichenette et patatra. Le climat pourrait reprendre ses droits. Le stade de France, la tour Montparnasse, la tour Eiffel. Les Invalides dont les toits dorés brillent au soleil. Puis vient cet instant où l'avion traverse les nuages, laissant voir le sol en transparence. Au revoir, France.",
					"Il fait beau au-dessus, bien sûr. Au bout de quelques minutes, la couche cotonneuse est bien loin déjà. Ca a l'air doux, on sauterait dedans.",
					"Après une heure de vol, voilà la mer. 'On a le ciel sous les pieds', dit Antoine. La mer, où tout semble figé, immuable. Nous allons tellement vite que ni les nuages ni les bateaux ne bougent. Une multitude de petits points blancs apparaissent bientôt, on croirait voir une ville sous-marine. Et enfin, la côte.",
					"Dans les terres, l'eau est omniprésente. Le relief semble être sorti de l'océan il y a longtemps, lui laissant encore y étendre ses bras. Les champs et les habitations se concentrent près des cours d'eau ; partout ailleurs le paysage semble hostile. On voit des montagnes, au loin.",
					"En s'éloignant de la mer, les villes se font plus grandes, les étendues d'eau plus regroupées. On en voit une immense avant de survoler Oslo. Les reliefs apparaissent. Les montagnes arides deviennent des forêts. Les allées à travers la forêt des lignes électriques. Les chemins des routes. Les voitures sont d'abord de minuscules points noirs avant de prendre forme. Les arbres se distinguent les uns des autres à présent. Jusqu'au dernier moment on croit atterrir en plein champ. Et pourtant il y a bien une piste.",
					"",
					"Aéroport. De nouveau le tumulte. Mais surtout l'inconnu. Le retard de l'avion et le temps d'attente des bagages nous font peu à peu perdre espoir d'avoir le second vol. Ce que nous confirme l'hôtesse à qui nous demandons. 'Too late.' D'autres français sont dans le même cas. Il est heureusement facile de changer de ticket pour le vol suivant, une heure plus tard. Mais l'atteindre se révèle plus dur : enregistrement des bagages, douanes... De nouveau l'angoisse monte, et à juste titre : il nous faudra courir pour atteindre la porte d'embarquement avant sa fermeture.",
					"C'est essouflés que nous nous installons dans l'avion. Direction Trondheim.",
					"",
					"Ca y est, nous sommes arrivés ! Le grand soleil d'Oslo a laissé place à la pluie. Un bus fait plusieurs arrêts dans le centre avant de nous emmener jusqu'à Moholt, notre village étudiant. La ville a l'air grande. Au village, la réception est pleine, il faudra patienter encore un peu. On récupère les clés, on se perd dans les bâtiments avant de trouver chacun le nôtre.",
					"Je monte mes 30kg de valises jusqu'au sixième étage. Un couple de polonais m'accueille : lui vient d'achever son Erasmus, elle le commence bientôt, ils sont là tous les deux jusqu'à fin août le temps de cette transition. Ensuite j'aurai trois nouveaux colocs.",
					"L'appartement est plutôt bien équipé, je n'aurai pas trop de choses à acheter. Nous faisons quelques courses de survie, j'achète notamment une couette ; même si nos colocs nous ont dit que le temps n'était pas aussi mauvais d'habitude, mieux vaut se méfier. Il y a pas mal de magasins accessibles à pied, mais pour trouver les choses dans les rayons il faudra encore s'entraîner.",
					"",
					"Contenu des valises rangé, lit préparé, quelques nouvelles données et un Skype effectué, il est temps pour moi d'aller me reposer. C'est très paradoxal ici, il fait un temps d'automne mais à 22h30, il ne fait toujours pas nuit."
				],
				images: [
					{
						image: "img/001/day001_01.jpg",
						legend: "Dernier selfie en France avant un moment !"
					},
					{
						image: "img/001/day001_02.jpg",
						legend: "Parés au décollage."
					},
					{
						image: "img/001/day001_03.jpg",
						legend: "Une dernière photo  de la France avant de traverser les nuages..."
					},
					{
						image: "img/001/day001_04.jpg",
						legend: "Au-dessus il fait beau !"
					},
					{
						image: "img/001/day001_05.jpg",
						legend: "On distingue encore un peu le sol par moments."
					},
					{
						image: "img/001/day001_06.jpg",
						legend: "La mer du Nord. Trouverez-vous les bateaux ?"
					},
					{
						image: "img/001/day001_07.jpg",
						legend: "La côte norvégienne. On sent déjà que c'est l'eau qui a le pouvoir ici."
					},
					{
						image: "img/001/day001_08.jpg",
						legend: "Un peu plus dans les terres, l'eau reste omniprésente."
					},
					{
						image: "img/001/day001_09.jpg",
						legend: "Les habitations et les champs suivent le cours d'eau. Autour il n'y a que des arbres."
					},
					{
						image: "img/001/day001_10.jpg",
						legend: "Encore un peu d'eau avant d'atteindre Oslo !"
					},
					{
						image: "img/001/day001_11.jpg",
						legend: "Oslo, la capitale, mais qui n'est pas si grande."
					},
					{
						image: "img/001/day001_12.jpg",
						legend: "En voilà un bien installé..."
					},
					{
						image: "img/001/day001_13.jpg",
						legend: "Bonne nuit, des bisous !"
					}
				]
			},
			{
				id: "2",
				title: "Visite de Trondheim",
				date: "12 août",
				html: [
					"Après un tour d'horloge bien mérité, je me dirige vers la cuisine dans l'optique d'un petit-déjeuner. Ca sent comme si quelqu'un avait mangé un repas de midi. Je comprends en voyant les restes de jaune d'oeuf dans une assiette qu'il va falloir m'y habituer ; on n'a pas tous la même culture ici. Je remarque en ouvrant la poubelle que le-dit oeuf est tout blanc, bizarre. Petit-déj, douche, web development ; tout roule comme si j'étais là depuis longtemps. A midi, des pâtes à l'eau comme la veille au soir, et puis c'est parti.",
					"",
					"Quatre heures et demi de marche dans Trondheim. C'est très vert en cette saison, il doit beaucoup pleuvoir. Et c'est très beau. Les couleurs des maisons compensent le gris maussade du ciel. C'est une grande ville, il y a beaucoup de magasins et de restaurants, et pourtant on a l'impression qu'elle est à taille humaine. Et puis, en marchant, il ne fait pas si froid.",
					"L'office du tourisme est chauffé et dispose de free Wi-Fi, on y passe un moment. Sur le retour, on traverse le campus. Puis on affronte la terrible côte qui mène à Moholt ; il nous faudra une demi-heure pour en venir à bout.",
					"",
					"C'est l'heure de faire des courses plus conséquentes. J'achète des produits en provenance de Norvège : des pommes de terre, des carottes, des gâteaux. Il faut tenter. Au moment d'acheter du beurre, réflexion : Lekkmargarin, qui signifie littéralement 'margarine de lait', correspond-il à du beurre ? Il s'avèrera que non, je l'ai appris à mes dépends en y goûtant après en avoir mis dans la poêle. Pour les pommes de terre, c'est sans conséquence, mais pour les tartines, j'ai un doute.",
					"",
					"On passe la fin de soirée chez Maxime, où l'on apprend entre autres que les oeufs sont blancs parce que les poules qui les font ne sont pas les mêmes que chez nous. Celles qui font des oeufs blancs se reproduisent plus vite et demandent moins de nourriture, c'est pourquoi ils sont répandus.",
					"En rentrant, on remarque un attroupement. 'What's happening?', demande Antoine. 'Oh, we don't know.' On discute un moment avec trois espagnols et un hollandais. Un des colocs d'Antoine et une de Marjolaine, qu'on a rencontrés plus tôt dans la journée, sont hollandais aussi. Ca ne fait pas beaucoup de nationalités à notre actif, mais ça viendra.",
					"",
					"C'est l'heure de dormir à nouveau après cette fatiguante mais satisfaisante journée. Demain nous essaierons de nous acheter des vélos, il semble que ce soit le mode de déplacement privilégié ici, il y en a partout !"
				],
				images: [
					{
						image: "img/002/day002_01.jpg",
						legend: "Ma chambre !"
					},
					{
						image: "img/002/day002_02.jpg",
						legend: "Ma fenêtre donne sur les autres bâtiments du village."
					},
					{
						image: "img/002/day002_03.jpg",
						legend: "Le lit fait deux mètres. Pratique pour les grands, mais pas pour les draps !"
					},
					{
						image: "img/002/day002_04.jpg",
						legend: "L'entrée principale de Gløshaugen, campus scientifique de la NTNU. Ca en jette !"
					},
					{
						image: "img/002/day002_05.jpg",
						legend: "Une partie de Trondheim..."
					},
					{
						image: "img/002/day002_06.jpg",
						legend: "La cathédrale, dans laquelle a retenti une mélodie très sympathique quand nous nous y sommes arrêtés à 15h."
					},
					{
						image: "img/002/day002_07.jpg",
						legend: "Quelques maisons sur pilotis."
					},
					{
						image: "img/002/day002_08.jpg",
						legend: "Au loin on aperçoit l'entrée principale du campus."
					}
				]
			},
			{
				id: "3",
				title: "Ikea, ménage und Deutsch sprechen",
				date: "13 août",
				html: [
					"Expédition vélos ! Enfin, c'est ce que nous pensions avant d'arriver dans le magasin Fretex. C'est un genre de magasin de charité comme Emmaüs en France, il y a plein d'affaires d'occasion pour pas grand chose. Beaucoup de vélos enfant et un seul adulte cher pour l'usure constatée. On abandonne et on va au Kiwi pour comparer les prix avec le Rema : c'est à peu près la même chose.",
					"Une rapide pause plus tard - au cours de laquelle je rencontre Pascal, un de mes colocs, qui est allemand et vient d'arriver - et nous repartons pour Ikea. Le bus coûte 50 couronnes (plus de 5€) pour un trajet de moins de dix minutes...le retour se fera à pied. Chacun trouve de quoi compléter sa chambre et c'est tant mieux parce qu'à quarante minutes de marche à pied, on n'ira pas si souvent.",
					"",
					"Je décide ensuite de faire le ménage dans les placards. Bouteilles d'huile vides à moitié renversées, paquets de céréales vides, nourriture périmée ou plusieurs paquets d'un même produit entamés...sympa les précédents. En nettoyant toutes les poignées collantes des placards, je me demande un peu comment on peut vivre là-dedans. Je range un peu les choses à ma façon, au risque de ne pas plaire à ceux qui étaient déjà là, mais tant pis ils n'avaient qu'à le faire !",
					"Pendant ce nettoyage arrive Johannes, allemand aussi, accompagné de son pote Timo. Ce dernier l'a emmené en voiture depuis Stockolm, en Suède, où il étudie. Pour l'instant on ne discute pas trop, ils s'installent et moi je nettoie.",
					"",
					"Je mange dans la cuisine pour une fois et j'en profite pour discuter avec la polonaise. On parle gastronomie, elle me dit que pour elle aussi c'est important de bien manger. Elle m'apprend qu'il n'y a pas de viande de volaille ici, elle en a fait venir de Pologne - ou est venue avec, je n'ai pas compris.",
					"Un jeu de cartes chez Maxime plus tard, je rentre chez moi dans l'optique de me poser deux minutes et de repartir passer un peu de temps sous le 'chapiteau' où il y avait du monde la veille. Mais en entrant dans l'appartement, je trouve les trois allemands attablés en train de boire. Ils ont apporté un stock d'alcool de Suède parce que c'est moins cher là-bas. Ils m'invitent à me joindre à eux. On joue au PMU, ça va, je connais le principe, donc ça se passe plutôt bien.",
					"Au cours de la conversation, on mixe un peu l'allemand, le français et l'anglais. C'est super marrant d'entendre des allemands alcoolisés débiter les mots français qu'ils connaissent les uns après les autres. Ils connaissent Sarkozy et trouvent Carla Bruni sexy, savent que François Hollande a trompé sa compagne. Ils connaissent Marine Le Pen aussi. Et ils entonnent régulièrement et sans crier gare 'Voulez-vous couchez avec moi'. En revanche, pour les blagues douteuses, ça reste en allemand, m'évitant de comprendre.",
					"On descend enfin sous le chapiteau, où il y a pas mal d'étrangers déjà. Je repère Antoine et son coloc Quentin, plus un espagnol et un hollandais de la veille. On rencontre plein de français, quelques allemands, quelques hollandais. Il y a surtout des gars ; 'Too many baguettes here!' disent mes colocs. 'Kein Problem für mich' sera ma réponse.",
					"Je finis par aller me coucher. Pascal me fait une accolade amicale pour me souhaiter bonne nuit, j'avais oublié qu'ils faisaient ça en Allemagne et je trouve ça chaleureux. Si je dois vivre jusqu'à fin décembre avec eux, il faut que je m'intègre ; je vais apprendre plus d'allemand que de norvégien !"
				],
				images: [
					{
						image: "img/003/day003_01.jpg",
						legend: "Expérience culinaire n°1 : Ca sent la canelle, comme écrit en bas à droite du paquet. Google traduction n'aide pas trop. Il semble que ce soit un genre de galette de blé, ça ressemble au pain Lavash mais en plus épais. Elles sont pliées en deux et il y a une garniture crémeuse à la canelle à l'intérieur. Froid ce n'est pas terrible. La traduction hasardeuse de Google m'incite à la réchauffer. C'est un peu meilleur, mais pas transcendant ; ce ne sera pas la découverte du siècle !"
					},
					{
						image: "img/003/day003_02.jpg",
						legend: "Moholt se situe vraiment en hauteur, il faut grimper. La ville est dans la vallée, près de l'eau. Mais beaucoup d'habitations sont en hauteur, comme on le voit en face. C'est magnifique toutes ces maisons de couleurs sur la colline."
					},
					{
						image: "img/003/day003_03.jpg",
						legend: "Qui a dit qu'il n'y avait pas de ciel bleu en Norvège ?"
					},
					{
						image: "img/003/day003_04.jpg",
						legend: "Maxime et Marjolaine profitent du soleil pour faire un selfie."
					}
				]
			},
			{
				id: "4",
				title: "Trop c'est trop !",
				date: "14 août",
				html: [
					"Je me lève à neuf heures, assumant mieux que prévu la soirée de la veille. Je passe un peu de temps tranquille avant de rejoindre les autres à la salle de sport. Elle est en phase de test, et donc gratuite, jusqu'à fin août ; autant en profiter ! Après plusieurs machines essayées et quelques exercices on est un peu fatigués ; c'est l'heure de rentrer. Ce n'est pas trop mon truc mais c'est sympa d'avoir pu essayer.",
					"",
					"Après le repas, direction le centre-ville ! Suite aux rencontres d'hier soir, on est plus nombreux que prévu. Il faut souvent s'attendre les uns les autres et c'est un peu pénible ; il faudra se subdiviser à l'avenir. On visite un peu plus en détails puis on essaye de voir la mer, en vain. Il n'y a que des petits ports. Il faudra marcher plus pour espérer l'apercevoir.",
					"Au moment de rentrer, on envisage de manger ensemble le soir. Il y a un restaurant en haut d'une tour de diffusion radio à Tyholt, la vue doit être superbe. Nous définissons un point de rendez-vous et partons nous reposer. J'en profite pour regarder le programme de la semaine ; les choses sérieuses commencent demain.",
					"",
					"A l'heure dite, il n'y a pas une quinzaine de personnes au point de rendez-vous comme nous le pensions, mais une soixantaine ; peut-être plus. Ceux qui ont lancé l'événement ont visiblement été victimes du bouche à oreille. Nous partons malgré tout. Nous faisons la queue pour monter dans l'ascenceur dix par dix. Comme escompté, la vue est superbe là-haut. Mais comme nous le pressentions, pas moyen de manger, nous sommes bien trop nombreux et la liste d'attente quasi-complète. Nous prenons seulement quelques photos et faisons la queue pour redescendre.",
					"En rentrant, je trouve les trois allemands en train de regarder un match de foot : Dortmund - Bayern. L'un supporte Dortmund, l'autre le Bayern ; le troisième supporte un autre club mais pense que Dortmund va gagner. Au moment où j'écris il y a 0 - 2, ça semble pourtant compromis pour Dortmund... Je me suis installée à côté d'eux pour coder, je trouve ça plus sympa. Ca nous permet de discuter un peu de choses et d'autres. Comme de comment nous allons faire pour prendre une douche demain matin à six pour une salle de bain..."
				],
				images: [
					{
						image: "img/004/day004_01.jpg",
						legend: "De l'eau à Trondheim, encore."
					},
					{
						image: "img/004/day004_02.jpg",
						legend: "Il y a un cimetière autour de la cathédrale. Ici pas de marbre au sol, juste de l'herbe. C'est le deuxième que nous voyons et c'est vraiment moins glauque."
					},
					{
						image: "img/004/day004_03.jpg",
						legend: "Une petite pause..."
					},
					{
						image: "img/004/day004_04.jpg",
						legend: "...qui engendre une photo plus drôle que prévu."
					},
					{
						image: "img/004/day004_05.jpg",
						legend: "Saurez-vous tous les identifier ?"
					},
					{
						image: "img/004/day004_06.jpg",
						legend: "De l'eau et de la verdure."
					},
					{
						image: "img/004/day004_07.jpg",
						legend: "Un port parmi d'autres !"
					},
					{
						image: "img/004/day004_08.jpg",
						legend: "Le même port vu autrement."
					},
					{
						image: "img/004/day004_09.jpg",
						legend: "Il y a, en autres choses, une locomotive sur le campus."
					},
					{
						image: "img/004/day004_10.jpg",
						legend: "Le village de Moholt est plutôt joli sous le soleil."
					},
					{
						image: "img/004/day004_11.jpg",
						legend: "J'habite quelque part par là..."
					},
					{
						image: "img/004/day004_12.jpg",
						legend: "Du haut de la tour, on a une superbe vue..."
					},
					{
						image: "img/004/day004_13.jpg",
						legend: "Et on voit enfin la mer !"
					}
				]
			},
			{
				id: "5",
				title: "Ready, set, go!",
				date: "15 août",
				html: [
					"Lever à sept heures et demie. Dur. On est tous prêts pile à l'heure sur laquelle on s'était accordés, huit heures et demie, parfait. On ne sait pas trop où aller, mais il s'avère que ce n'est pas un problème, au vu du nombre de personnes qui quitte Moholt vers le centre-ville.",
					"Nous arrivons à l'hôtel à côté du stade, le Scandic Lerkendal, avec quelques minutes d'avance. Le hall est rempli d'étudiants. Nous avançons jusqu'aux tables où auront lieu les inscriptions.",
					"A neuf heures, un sifflement fait taire tout le monde. Son auteur se met à hurler : 'Master students, to the left! Exchange students, to the right! Prepare your ID! Ready, set, go!' Et tout le monde s'exécute. Les organisateurs sont vraiment très efficaces ; nous passons au bout de quelques minutes. Nous sommes maintenant inscrits et détenteurs d'un t-shirt et d'un sac à l'effigie de la NTNU, d'un bracelet prouvant que nous avons payé les activités de la semaine d'intégration et de nombreux papiers d'information. Plus de 1500 étudiants seront inscrits en deux heures ! Mais pour nous, passés dès les premières minutes, cela signifiera plus d'une heure et demie d'attente.",
					"",
					"A onze heures, il est enfin temps d'entrer dans la salle pour la réunion d'accueil. Nous attendons un peu, puis un chant retenti. Le silence se fait dans la pièce. C'est probablement un chant traditionnel norvégien. C'est a capella. Il nous faut un peu de temps pour comprendre que les deux voix qui chantent sont là, dans la pièce, marchant doucement vers la scène. Encore une façon originale mais efficace d'obtenir l'attention de tous. Ensuite se succèdent le directeur, le maire, la responsable du service des relations internationales, des responsables d'associations étudiantes. Tous nous souhaitent la bienvenue en Norvège, à Trondheim, à la NTNU, et nous rappellent à quel point c'est une bonne université. Un autre employé du service des relations internationales nous fait bien rire en parlant de la météo norvégienne et de la rivalité entre Trondheim et Bergen, et entre la Norvège et la Suède. On nous explique aussi, à l'aide de quelques anecdotes, que les norvégiens sont par nature un peu froids et que ce sera à nous de faire le premier pas.",
					"A la fin de la réunion, c'est l'heure de manger : soupe de légumes et tartines beurrées. C'est un peu décevant au vu de l'après-midi qui nous attend, mais ça a l'air plutôt typique et c'est vrai que les norvégiens mangent peu le midi. Une fois rassasiés, il faut encore attendre.",
					"",
					"Nous commençons à sortir du bâtiment. Nous sortons à peine qu'une fanfare déboule de l'intérieur et prend la tête du cortège. Il ne font pas les choses à moitié ici. La-dite fanfare nous accompagne jusqu'au campus scientifique, Gløshaugen, devant le bâtiment principal. Le but est de prendre une photo de tout le monde, mais il semble que beaucoup d'entre nous n'y apparaisse pas en raison du nombre. Il nous faut là aussi patienter ; nous en profitons pour prendre quelques 'contre-photos'.",
					"Après un moment qui nous semble une éternité pour une photo, nous marchons en direction de la forteresse. Elle est impressionnante et la vue aussi ; nous prenons quelques photos et voyons pour la première fois la mer dans la fjord. Un peu d'attente plus tard, nous formons, comme demandé à l'aide d'un nouveau sifflement et d'un mégaphone, une équipe de huit. Le jeu s'appelle 63° North, comme la latitude de Trondheim.",
					"Quatre par quatre, les équipes se déplacent aux alentours de la forteresse pour s'affronter dans des jeux. Le premier est basé sur l'histoire du loup, de la chèvre et du chou ; c'est plutôt drôle. Malheureusement le temps n'est pas avec nous et la fine pluie qui tombe en continu rend les déplacements et les nombreux temps d'attente un peu pénibles ; et certains jeux dangereux car glissants. Nous faisons au mieux malgré tout avant de rentrer à l'abri.",
					"",
					"Je prends le temps de faire des courses un peu plus importantes cette fois. La viande est vraiment chère et a un aspect bizarre, comme si elle était déjà cuite. Il y a très peu de volaille et je ne trouve pas d'équivalent au jambon. J'achète donc des produits de la mer et des pains spéciaux. Les noix sont en libre service pour faire des mélanges mais pas trop chères, c'est plutôt cool. Je ne résoud pas le mystère du lait : lettmelk ou helmelk ? Je ne prendrais pas le risque cette fois.",
					"Le pain au fromage (ostbrød) est plutôt bon. Les trois allemands m'aprennent à jouer à leur version du président, je leur explique au passage comment on joue en France et on finit par faire un mix des deux. C'est vraiment du partage culturel ! On retourne ensuite au chapiteau comme les jours précédents pour y finir la soirée. Contrairement à ce qu'on a dit ce matin, trois norvégiens nous abordent ; enfin nous en rencontrons ! La discussion est sympa et au retour le sommeil ne se fait pas attendre."
				],
				images: [
					{
						image: "img/005/day005_01.jpg",
						legend: "La fanfare nous accompagne jusque sur le campus. Ils font de la musique, chantent, dansent, tapent dans les mains."
					},
					{
						image: "img/005/day005_02.jpg",
						legend: "Où sont les ENSEArques ? Cachés, mais les contre-photos sortiront plus tard."
					},
					{
						image: "img/005/day005_03.jpg",
						legend: "Nous sommes très nombreux sur la route de la forteresse."
					},
					{
						image: "img/005/day005_04.jpg",
						legend: "La forteresse Kristiansten surplombe la ville."
					},
					{
						image: "img/005/day005_05.jpg",
						legend: "Il ne fait pas beau mais la vue est sympa."
					},
					{
						image: "img/005/day005_06.jpg",
						legend: "On aperçoit le bâtiment principal du campus, au loin."
					},
					{
						image: "img/005/day005_07.jpg",
						legend: "Les jeux sont lancés, il faut les trouver tout autour de la forteresse."
					},
					{
						image: "img/005/day005_08.jpg",
						legend: "Toujours plus haut !"
					},
					{
						image: "img/005/day005_09.jpg",
						legend: "Un relai de lancer d'oeuf. Malheureusement il éclatera dans les mains de Laura."
					},
					{
						image: "img/005/day005_10.jpg",
						legend: "Marjolaine et Mathilde, attachées par les pieds."
					},
					{
						image: "img/005/day005_11.jpg",
						legend: "Les maisons de toutes les couleurs et la tour de Tyholt, où nous avons essayé d'aller manger."
					}
				]
			},
			{
				id: "6",
				title: "The Matriculation ceremony",
				date: "16 août",
				html: [
					"Mes colocs ont décidé d'aller à la cérémonie de Matriculation avec une heure de retard car elle sera en norvégien et probablement répétitive par rapport aux discours de la veille. J'ai longuement hésité à mettre mon réveil, mais finalement j'y vais car j'ai lu qu'il y aurait des prestations culturelles. Et effectivement le début de la cérémonie est ponctué de chants d'une chorale, c'est super. Le présentateur est drôle et a quelques mots en anglais pour nous, les internationaux. Il nous annonce que la suite sera en norvégien mais sous-titré en anglais sur l'écran géant. Certains discours sont intéressants, d'autres répètent mot pour mot ceux de la veille, mais en norvégien. C'est sympa d'entendre parler la langue, même si la cérémonie est un peu longue. Elle a un caractère très officiel : les représentants de la ville et du corps enseignant arrivent et repartent escortés par une fanfare. Le directeur porte un habit de cérémonie. Heureusement pour nous, debouts à attendre, la cérémonie est ponctuée de vidéos et de prestations : des danses acrobatiques, des groupes de musique, le défilé des associations de l'université. Et puis, il ne fait pas si froid, il ne pleut pas, et on nous distribue du chocolat.",
					"Après la cérémonie, nous parcourons les deux allées principales du campus où se trouvent les stands des associations. Nous y obtenons de nombreuses informations, notamment à propos des sports. Nous entrons dans la bâtiment principal où nous devons récupérer nos cartes étudiantes. Mais le bureau est fermé pour le repas et beaucoup de monde attend. Il faudra y retourner à un moment stratégique.",
					"",
					"Faute de carte étudiante, nous nous dirigeons vers la maison du service des relations internationales, appelée ici seulement 'International House', dont le jardin est le théâtre d'un barbecue géant. L'organisation est bonne là encore, c'est impressionnant ; plus de mille étudiants vont être servis et le temps d'attente est tout à fait raisonnable. Chacun peut avoir un hamburger, un hot dog, une galette de pomme de terre, un peu de salade de pommes de terre et une étrange mixture à base de crevettes, puis des pancakes. Je commence à me demander comment on peut avoir autant de choses pour seulement 300 couronnes la semaine, alors que la vie est si chère ici.",
					"Nous mangeons assis dans l'herbe comme tous les autres, réunis par plus ou moins grands groupes. Il fait vraiment beau maintenant. Nous nous dirigeons dès que possible vers le bâtiment principal pour obtenir nos cartes étudiantes pendant que les autres profitent du soleil après manger. Cette stratégie s'avère payante : nous sommes quasiment les premiers à prendre une photo et à recevoir nos cartes. Comme à la réception pour obtenir nos clés, il faut prendre un numéro pour avoir la carte ; encore une sacrée organisation.",
					"Nous demandons où trouver des imprimantes car nous devons imprimer un formulaire pour enregistrer notre adresse à la poste ; sinon nous ne recevrons par les lettres de la NTNU. Nous nous rendons là où on nous a indiqué. Nous avons déjà des sessions sur les ordinateurs de la bibliothèque. Nous lançons les impressions ; il faut ensuite aller passer sa carte étudiante près de l'imprimante pour valider les impressions. C'est le système du print@me ou follow me que j'avais étudié durant mon stage de première année ; c'est drôle. Malheureusement les cartes étudiantes venant de nous être délivrées, cela ne fonctionne pas encore ; il faudra revenir.",
					"Nous nous rendons ensuite dans un amphi où se tient une vente de cartes SIM proposée par l'association qui vient en aide aux élèves Erasmus, ESN. Il n'y a que 110 cartes disponibles et au moins 200 étudiants dans la pièce. Et les forfaits et prix proposés ne sont pas si attractifs. Nous abandonnons donc.",
					"",
					"C'est seule que je décide de retourner en ville. Se déplacer en grands groupes où chacun ne veut pas faire les mêmes choses, et où il faut suivre ceux devant ou attendre ceux derrière est assez pénible. Je retourne à l'office du tourisme et demande où se trouve la boutique AtB (dont on a appris lundi que cela signifiait 'We'll take you from A to B') pour acheter une carte de bus et un endroit où trouver une carte SIM. L'endroit qui m'est indiqué pour une carte SIM est une épicerie de centre-ville ; cela ne me paraît pas très adapté. J'entre dans la galerie commerciale du centre où je répère les deux principaux opérateurs norvégiens : Telenor et Telia. Je regarderai les prix sur Internet. Je me rends ensuite à la boutique AtB bondée d'étudiants ; il me faut prendre un numéro et attendre. Mais là encore les vendeurs sont efficaces et discuter avec d'autres étudiants permet de patienter. Je rentre en bus avec ma carte toute neuve. 1700 couronnes le semestre tout de même. Mais plus de montée de cette terrible côte.",
					"",
					"J'improvise un repas, et la soirée se finira comme les jours précédents près du chapiteau. Il y a une forte probabilité de voir une aurore boréale mais la luminosité est trop importante encore. Difficile de croire qu'on n'aura que quelques heures de soleil en hiver !"
				],
				images: [
					{
						image: "img/006/day006_01.jpg",
						legend: "Le dispositif est impressionnant : tambours qui accueillent les officiels, écran géant, caméras pour une retransmission live sur internet."
					},
					{
						image: "img/006/day006_02.jpg",
						legend: "Le bâtiment principal depuis le jardin où nous mangeons."
					},
					{
						image: "img/006/day006_03.jpg",
						legend: "Toujours cette même vue de Trondheim, mais sous le soleil."
					},
					{
						image: "img/006/day006_04.jpg",
						legend: "Et encore."
					},
					{
						image: "img/006/day006_05.jpg",
						legend: "Expérience culinaire n°2 : Je m'attendais à des biscuits sucrés. En fait ce sont des crackers aux graines, qui peuvent se manger aussi bien avec de la confiture que du fromage. J'ai essayé avec la margarine de lait, l'ensemble est plutôt pas mal."
					},
					{
						image: "img/006/day006_06.jpg",
						legend: "Expérience culinaire n°3 : La fameuse margarine. D'ailleurs, je l'appelle margarine de lait, mais je me demande si lett ne signifie pas plutôt crème."
					},
					{
						image: "img/006/day006_07.jpg",
						legend: "Expérience culinaire n°4 : Les yaourt aux goûts exotiques ne sont pas les plus chers. Cette fois c'est conforme à ce qu'on s'attend à manger."
					},
					{
						image: "img/006/day006_08.jpg",
						legend: "La pièce en chocolat qu'on nous a distribuée ce matin, à l'effigie de l'université."
					},
					{
						image: "img/006/day006_09.jpg",
						legend: "On se sent riche ici ! Ceci dit, les prix paraissent énormes donc ça compense. Mais quand on convertit en euros, il s'avère que les prix sont plus élevés et nous pas plus riches."
					},
					{
						image: "img/006/day006_10.jpg",
						legend: "Grandes ou petites, trouées ou non ; les pièces me font penser au Quarto !"
					}
				]
			},
			{
				id: "7",
				title: "Le beau temps a encore frappé",
				date: "17 août",
				html: [
					"Troisième jour où il faut se lever tôt. C'est dur. Je pars à pied avec mes colocs ; il fait beau et l'aller est en descente, pas besoin de bus. Nous trouvons l'amphi où se tient la réunion d'information. Je n'y apprends presque rien puisque j'avais lu la checklist des choses à faire en arrivant et que j'en ai déjà fait la plupart. C'est rassurant de se dire qu'on est plus organisés que la plupart des autres.",
					"En sortant de la pièce nous récupérons nos attestations d'arrivée. Nous avons une heure et demie d'attente avant le repas. Nous décidons d'aller faire un tour en ville. Nous retournons au centre commercial ; certains font des achats. J'hésite à acheter une carte SIM ; j'ai regardé les prix sur internet la veille mais c'est cher. Nous nous perdons sur le retour et découvrons un port de plaisance et une gare ; sympa.",
					"",
					"Nous arrivons après la masse pour manger les pizzas dans le jardin. Ensuite on nous appelle pour les jeux dans Trondheim. Nous décidons de diviser le groupe car nous sommes trop de français. Marjolaine et moi trouvons un autre groupe mais il s'avère plein de français et de belges parlant français. Nous nous divisons une seconde fois pour nous retrouver enfin dans un groupe plus mixte, avec des belges ne parlant pas français et des hollandais.",
					"Nous désignons une chef d'équipe qui reçoit les instructions : nous avons exactement trois heures pour aller à un maximum de checkpoints où des activités nous serons proposées, réaliser des interations avec les norvégiens et en envoyer la preuve par mail et répondre à des questions d'observations à travers la ville. Nous apprendrons donc de nombreuses informations plus ou moins utiles, comme le fait que la statue en centre-ville est en fait un cadran solaire, ou le nombre de statues sur la façade de la cathédrale. Un membre de l'équipe fera un câlin à une norvégienne, un autre essaiera d'en faire rire dans la rue. Nous ferons un casque viking en aluminium pour la chef d'équipe, massacrerons l'hymne national en pleine rue sur l'air de 'Au clair de la Lune', ferons une structure humaine en équipe et goûterons du brunost (fromage brun ayant un goût indéfinissable de fromage mais aussi de caramel) et de l'huile de poisson (qui a un mauvais goût mais est très bonne pour la santé ; un complément de vitamine D j'imagine).",
					"Notre score final n'est pas trop mal : il ne nous manque qu'un checkpoint et deux questions. Nous rentrons pile dans les temps. Nous restons un peu au soleil dans le jardin avant de rentrer de cette journée bien fatiguante.",
					"",
					"Je passe au Bunnpris acheter ce qui ressemble le plus à du jambon. Je compte le mettre dans des galettes de pomme de terre que j'ai achetées pour manger pendant la randonnée de demain. Je cuisine ensuite un repas typique d'ici : pommes de terre et saumon. C'est super bon. Je goûte les galettes de pomme de terre par acquis de conscience. Raté, il y a une crème sucrée à l'intérieur. Il faudra trouver autre chose pour demain.",
					"Là soirée se termine assis près du chapiteau, chantant des chansons françaises et anglaises (en yaourt plus qu'avec les vraies paroles) autour d'un français qui joue de la guitare. Nous ne nous dispersons pas trop tard ; tout le monde est bien fatigué."
				],
				images: [
					{
						image: "img/007/day007_01.jpg",
						legend: "En se perdant, on a trouvé de jolis endroits."
					},
					{
						image: "img/007/day007_02.jpg",
						legend: "Un concentré de moyen de transport !"
					},
					{
						image: "img/007/day007_03.jpg",
						legend: "Nous voilà enfin près de la mer."
					},
					{
						image: "img/007/day007_04.jpg",
						legend: "Un parc ; c'est vraiment très vert ici !"
					},
					{
						image: "img/007/day007_05.jpg",
						legend: "Dans les rues aussi les maisons sont de toutes les couleurs."
					},
					{
						image: "img/007/day007_06.jpg",
						legend: "Le défi du casque viking, ou comment quelqu'un a dû porter de l'aluminium sur la tête pendant deux heures."
					},
					{
						image: "img/007/day007_07.jpg",
						legend: "Le pont du bonheur. Marcher en-dessous rendrait heureux."
					},
					{
						image: "img/007/day007_08.jpg",
						legend: "Cette fois, plus un nuage !"
					},
					{
						image: "img/007/day007_09.jpg",
						legend: "Expérience culinaire n°5 : Ce sont des galettes de pomme de terre remplies d'une crème sucrée. Le goût me rappelle vraiment quelque chose mais impossible de trouver quoi d'après les ingrédients. C'est un peu comme si je mangeais une tarte aux fruits ou un clafouti."
					}
				]
			},
			{
				id: "8",
				title: "Rando au bord de l'eau",
				date: "18 août",
				html: [
					"J'ai choisi une randonnée facile et pas très longue, ne sachant pas quel serait mon niveau de fatigue et n'ayant pas d'équipement adapté. Je me perds en allant au campus mais arrive quand même à temps pour le bus. On nous distribue encore du chocolat. C'est plus une balade qu'une randonnée, nous longeons le fjord et voyons Trondheim au loin.",
					"Il y a des plages tout le long. Nous nous arrêtons pour manger ; j'ai finalement improvisé un sandwich avec des knekkebrød, des tranches de porc ressemblant vaguement à du jambon et de la margarine de lait. On est loin du jambon-beurre, c'est franchement moyen.",
					"On s'arrête finalement près d'une plage. Des norvégiens se baignent ou bronzent au soleil. On reste un moment avant de rentrer à pied. Je profite du passage en centre-ville pour m'acheter enfin une carte SIM, j'ai entendu que les forfaits prépayés étaient moins chers et de toute façon n'étant pas norvégiens c'est les seuls auxquels on a accès.",
					"",
					"Le saumon sera encore de mise ce soir. S'en suit une partie de Yams avec mes deux colocs ; en allemand c'est le Kniffel. Je retrouve le même groupe que la veille au chapiteau. Nous allons dans un appartement jouer au 21. Le premier joueur dit 1, le second 2, et ainsi de suite jusqu'à 21. Le 7 et le 14 permettent de garder ou de changer le sens du jeu selon la position des mains. Celui qui atteint 21 doit inventer une règle ; en l'occurence nous ajoutons des règles qui modifient la suite au fur et à mesure. La suite finale est difficile à mémoriser et il devient de plus en plus compliqué d'atteindre la fin : 23 - 21 (non prononcé mais la personne boit) - 9 - beer - 18 - 17 - 16 - 3 - 14 (la main du dessous donne le sens) - 13 (non prononcé mais montré avec les doigts) - 12 - 11 (en frappant dans ses mains) - 1 - 2 - 15 - 4 (prononcé debout) - 22 - 6 - 6 - 7 (la main du dessus donne le sens) - 8 - 20 - 10. Le tout en anglais. Bonne chance pour comprendre comment on en est arrivé là !"
				],
				images: [
					{
						image: "img/008/day008_01.JPG",
						legend: "Il y a plein de monde sur cette plage."
					},
					{
						image: "img/008/day008_02.JPG",
						legend: "Verdure, ciel bleu : qui l'eut cru ?"
					},
					{
						image: "img/008/day008_03.JPG",
						legend: "Des courageux se baignent dans l'eau froide du fjord."
					},
					{
						image: "img/008/day008_04.JPG",
						legend: "Les contours du fjord ne sont pas réguliers."
					},
					{
						image: "img/008/day008_05.JPG",
						legend: "Même s'il y avait plusieurs randonnées possibles, on est nombreux !"
					},
					{
						image: "img/008/day008_06.JPG",
						legend: "C'est vraiment l'été finalement."
					},
					{
						image: "img/008/day008_07.JPG",
						legend: "Ca grimpe de temps en temps."
					},
					{
						image: "img/008/day008_08.JPG",
						legend: "Quelques arbres encore..."
					},
					{
						image: "img/008/day008_09.JPG",
						legend: "Un norvégien a utilisé une corde attachée à ce mât métallique pour se jeter à l'eau."
					},
					{
						image: "img/008/day008_10.JPG",
						legend: "On voit Trondheim au loin."
					},
					{
						image: "img/008/day008_11.JPG",
						legend: "La plage sur laquelle nous nous sommes arrêtés."
					},
					{
						image: "img/008/day008_12.JPG",
						legend: "C'est bien la mer et pourtant il y a toujours des terres de l'autre côté ; c'est perturbant."
					},
					{
						image: "img/008/day008_13.JPG",
						legend: "Une petite plage encore."
					},
					{
						image: "img/008/day008_14.JPG",
						legend: "Il y a un bateau qui va sur l'île au milieu, il faudra tenter."
					},
					{
						image: "img/008/day008_15.JPG",
						legend: "J'ai l'impression d'être constamment à contre-jour dans cette ville."
					},
					{
						image: "img/008/day008_16.JPG",
						legend: "Toujours pas de nuages en vue."
					},
					{
						image: "img/008/day008_17.JPG",
						legend: "Les maisons n'ont pas bougé depuis la veille."
					},
					{
						image: "img/008/day008_18.JPG",
						legend: "Une terasse flottante !"
					},
					{
						image: "img/008/day008_19.JPG",
						legend: "Un contre-jour encore. Mais c'est pour se rappeler du soleil quand on n'en aura plus."
					},
					{
						image: "img/008/day008_20.JPG",
						legend: "Le vélo a vraiment sa place partout en ville."
					},
					{
						image: "img/008/day008_21.JPG",
						legend: "Expérience culinaire n°6 : Ca ressemble à du jambon, mais c'est pas bon !"
					},
					{
						image: "img/008/day008_22.JPG",
						legend: "Expérience culinaire n°7 : Le saumon est pas mal, même le premier prix."
					},
					{
						image: "img/008/day008_23.JPG",
						legend: "Expérience culinaire n°8 : Du chocolat ! Ca ne fait pas trop envie par ce temps, je vais le stocker pour cet hiver."
					}
				]
			},
			{
				id: "9",
				title: "Kubb party",
				date: "19 août",
				html: [
					"Pas d'impératif ce matin. C'est donc tranquillement que je me lève et me prépare. Je passe aussi plus de temps sous la douche que d'habitude puisque personne n'est pressé, et je fais un incroyable constat : j'ai bronzé en Norvège !",
					"En milieu d'après-midi, Antoine et moi décidons de faire une virée à Gløshaugen pour imprimer les documents que nous n'avions pas pu la dernière fois. Sur le chemin, nous faisons un point après une semaine : même si l'année n'a pas encore vraiment commencé et que nous n'avons pas tout à fait pris nos marques, nous nous sentons bien ici. Dépaysés, mais pas perturbés. Nous ne nous sommes jamais demandés 'Qu'est-ce que je fais ici ?' ou avons eu envie de faire marche arrière. Tant mieux ! Nous entrons dans le bâtiment des sciences naturelles ; la bibliothèque est déjà fermée et un écriteau nous invite à aller dans celle dédiée à la technologie, dans le bâtiment principal. Nous sortons donc de ce bâtiment en observant autour de nous : il y a des open-space avec des canapés, des salles informatiques, une cafétéria ; c'est dingue ici. Arrivés dans le bâtiment central, nous cherchons partout : encore une cafétéria, encore des espaces de travail ou de détente, mais pas de bibliothèque. Nous demandons notre chemin à un élève, qui propose de nous accompagner. Ah, d'accord, en fait il y a un bâtiment principal et un bâtiment central, nuance. On discute un peu ; selon lui nous allons vouloir allonger notre séjour, six mois c'est trop peu.",
					"Là aussi la bibliothèque est fermée. L'étudiant nous conseille d'aller dans notre bâtiment de cours, nous devrions pouvoir accéder à n'importe quelle salle informatique là-bas. Nous le remercions et nous y rendons. C'est immense. Nous parcourons les couloirs sans rien trouver si ce n'est des bureaux et des laboratoires. Et encore une cafétéria et des grands espaces de travail. Nous croisons de temps à autre des salles de travail ou de réunion fermées qu'il faut réserver. C'est dingue. Nous nous apprêtions à repartir après une dernière tentative quand nous tombons enfin devant une salle informatique. Un papier sur la porte donne les numéros des deux seules salles ouvertes durant l'été. Et effectivement, nous en trouvons une, ouverte, avec des élèves en train d'imprimer à l'intérieur. Je lis les explications : chaque élève se voit doté d'un quota de 300 couronnes par an, qu'il peut recharger ensuite. Une impression ou copie A4 noir et blanc coûte 0,75 couronne, une couleur 1 couronne ; le double en A3. Après les vélos, les voitures électriques et les bus, ça ne m'étonne pas tellement, mais c'est super. Nous nous connectons sur nos sessions, lançons les impressions. Je passe ensuite la carte sur la machine : l'interface est entièrement en norvégien. Heureusement c'est une Xerox et je la connais parfaitement grâce à mon premier stage. Nous arrivons donc à nos fins !",
					"",
					"Une fois de retour, nous nous rendons à la poste (à l'intérieur de la supérette Bunnpris) pour faire enregistrer notre adresse et payer notre loyer. Il faudra six jours ouvrés pour que notre adresse oit enregistré et que des lettres puissent nous parvenir. Quant au loyer, mauvaise surprise : nous avions décidé de payer en liquide pour éviter les 100 couronnes supplémentaires en cas de virement bancaire et les 50 en cas de paiement par carte en ligne. Mais en fait, en liquide, c'est 75 couronnes de plus pour le service. Donc quoiqu'il arrive notre loyer est plus cher que prévu.",
					"Cet administratif réglé, j'achète mon premier pack de bière (la moins chère, quatre fois plus chère qu'en France) et mange à l'heure allemande car nous devons partir à dix-neuf heures. Nous cachons des bières dans nos sacs pour boire un peu avant la soirée : nous ne devons pas avoir d'alcool sur le campus mais il sera probablement très cher à l'intérieur de la boîte, donc nous essaierons de boire entre temps. Nous préparons aussi des petites bouteilles de vodka-orange, problème : il ne reste pas assez de jus d'orange. Je vais acheter une bouteille avant de partir. Je ne prends pas une brique car je ne pourrai pas la refermer. Je remarque qu'il n'est pas écrit 'juice' comme sur les autres bouteilles mais 'saft' ; je décide d'essayer quand même. Pascal complète la sienne, je fais entièrement la mienne. Je m'en renverse un peu sur la main, c'est un peu trop collant pour être du jus mais ça n'attire pas mon attention pour l'instant.",
					"",
					"C'est parti ! Nous buvons une bière sur le trajet. A l'arrivée, il y a des boissons et des gâteaux apéro. Au bout d'une quarantaine de minutes on nous explique les règles du Kubb. J'entends les explications mais suis bien trop petit pour voir la démonstration. On regarde les premières parties puis on en fait deux ; une gagnée une perdue. On décide d'aller un peu plus loin dans le jardin pour notre 'before' improvisé ; nous sommes loin d'être les seuls à avoir fait ce calcul. La bière, bon, elle n'est pas terrible, c'est la moins cher. Mais la vodka-orange, beurk, c'est immonde ! J'ai l'impression de boire du sucre à l'état liquide. Du sirop en fait. Je regarde la bouteille : 48% de sucre dans les ingrédients, 53 dans les valeurs nutritionnelles. Mais c'est quoi ce jus ? Je vérifie le sens de 'saft', et un gars me dit qu'en allemand aussi cela signifie jus. Je fais goûter aux autres ; même constat. Une fille regarde la bouteille plus attentivement : en bas à droite, même sans comprendre le norvégien, on comprend que cette bouteille de 1,5L équivaut à 9L de jus. C'est donc du concentré. N'essayez jamais, jamais, JAMAIS de boire du concentré. Au moins, je ne serai pas trop alcoolisée.",
					"Maintenant, direction la soirée ! Nous marchons jusqu'à l'imprononçable 'Studentersamfundet'. A l'entrée, on nous demande s'il y a de l'alcool dans nos sacs. Je dis non, même s'ils goûtaient ils n'y verraient que du feu. Nous payons le vestiaire, 25 couronnes chacun. Et pas moyen de mettre le manteau de quelqu'un dans son sac, il faudrait payer double. A l'intérieur on peut tout payer par carte, voilà qui est pratique. On s'achète d'ailleurs une bière. 75 couronnes, ce sera la seule. A l'intérieur il y a beaucoup de salles : bars, restaurants, deux discothèque. Je navigue entre les deux et entre les groupes : ceux rencontrés au chapiteau, ceux rencontrés au Trondheim games, ceux rencontrés par mes colocs ou ceux rencontrés par les autres ENSEArques. Pour l'instant on s'est surtout fait des connaissances, mais c'est sympa de croiser régulièrement du monde dans la boîte.",
					"Un peu après deux heures, on décide de rentrer. Un stand de SiT (Students in Trondheim, qui gère les cafétérias du campus et nos logements, notamment) est là, distribuant des verres d'eau gratuitement ; encore un truc intelligemment organisé. Les garçons s'achète des burgers, 70 couronnes, et la carte VISA internationale ne passe pas, il faut une VISA norvégienne. 'What's the fuck! That's crazy!'",
					"Les bus nocturnes ne font a priori pas partie de notre abonnement, il faudrait payer ; cher en plus. C'est donc à pied, comme beaucoup d'autres, que nous remonterons à Moholt. Nous passons par le campus et apprenons qu'il est possible d'y entrer à toute heure du jour et de la nuit. Il suffit de passer sa carte étudiante et de taper son code PIN. C'est fou ! La côte est difficile après une semaine et une soirée comme celle-ci ; et le sommeil arrive bien vite après ces quarante minutes de marche. Je ne sais pas si on sortira si souvent !"
				],
				images: [
					{
						image: "img/009/day009_01.jpg",
						legend: "Le fameux 'ribbon' qui nous permet d'accéder aux activités payantes. J'ai hâte de pouvoir l'enlever. Il était un peu plus près de ma main hier pendant la randonnée...oui oui c'est bien une trace de bronzage.",
					},
					{
						image: "img/009/day009_02.jpg",
						legend: "Expérience culinaire n°9 : Appelsin, orange. Saft, jus. Fra konsentrert, à base de concentré. Comment ça ce n'est pas ce qui est écrit ? Oh allez, j'avais presque tout bon..."
					}
				]
			},
			{
				id: "10",
				title: "Have some rest, please!",
				date: "20 août",
				html: [
					"L'été en Norvège, on se réveille toujours deux fois. La première entre quatre heures et demie et cinq heures, pour constater que la chambre baigne déjà dans la lumière orangée du soleil. La deuxième parce qu'on n'est plus fatigué et qu'il est temps de se lever. On croit alors qu'il est très tard dans la matinée, puisque c'est le deuxième réveil ponctué de soleil. Mais en fait, il se révèle qu'il est neuf heures ou neuf heures et demie, ce qui est certes tard, mais reste correct pour un jour de vacances. Et puis vient ce matin où, l'habitude étant prise, on se réveille en pensant 'mais non il n'est pas si tard, on ne me la fait pas à moi'. Et où il est en fait quinze heures.",
					"Ca faisait longtemps que je n'avais pas dormi si tard. Depuis quelques jours mon corps me signalait un clair besoin de sommeil mais je préférais passer mes soirées au chapiteau ; il a repris ses droits. Je prends mon petit-déjeuner, après tout pourquoi pas. Plus tard on me demandera ce que j'ai fait de ma journée ; je suis donc fichée comme la grosse dormeuse qui mélange de la vodka et du jus concentré.",
					"",
					"L'heure de sortir vient vite après une journée aussi courte. Je décide de prendre le bus mais il est bondé. Le chauffeur crie quelque chose en norvégien, d'avancer le plus possible vers le fond du bus probablement, mais personne ne comprend ni ne s'exécute. Je pense que ça l'agace un peu. Tout le monde ne peut pas rentrer. A l'arrêt suivant des gens tentent quand même de monter. Un gars monte pile à la fermeture des portes, cela fait retentir un bip continu dans le bus. Le chauffeur, visiblement énervé cette fois, se lève, sort du bus, marche jusqu'à la porte du milieu et engueule, toujours en norvégien, le gars en question, qui n'a d'autre choix que de sortir en s'excusant. Ca ne rigole pas ici. Lors du dernier amphi on nous avait signalé qu'un élève en retard ou non attentif en cours était plus que susceptible d'être viré. Nous avons aussi remarqué que les voitures s'arrêtaient systématiquement pour laisser les piétons traverser, en ralentissant longtemps avant, et ce même en dehors des passages piétons. De nombreux vélos ne sont pas attachés dans la rue. Et pour finir, il est très simple de ressortir d'un magasin sans passer par les caisses car il n'y a pas de portique à l'entrée. Les norvégiens sont peut-être froids au premier abord, mais il y a une certaine culture de la confiance et du respect ici.",
					"Après ces péripéties, le bus arrive en retard sur le campus. Je décide de me rendre à la soirée quizz plutôt qu'au film, contrairement à ce que j'avais choisi initialement. Les questions sont variées et font appel à des connaissances sur divers pays et domaines. Dans le groupe que j'ai intégré il y a plusieurs nationalités et cursus, mais cela ne suffira pas pour gagner. On aura quand même appris quelques trucs, comme par exemple que Tunis se situe 3000 kilomètres au sud de Trondheim.",
					"",
					"Le quizz terminé, nous prenons le bus pour rentrer à Moholt. Nous redescendons quasiment aussitôt au chapiteau où un groupe joue au président, plutôt version française. D'autres étudiants s'approchent et presque toutes les nationalités connaissent le jeu, chacun ayant sa variante. C'est l'occasion de rencontrer encore un peu de monde ; puis il est temps de rentrer."
				],
				images: [
					{
						image: "img/010/day010_01.jpg",
						legend: "Expérience culinaire n°10 : Bon, les céréales en elle-mêmes, rien à dire. Mais la lecture du paquet n'est absolument pas une distraction efficace pendant le petit-déjeuner, je ne comprends rien !",
					},
					{
						image: "img/010/day010_02.jpg",
						legend: "Je n'ai pas encore réussi à prendre une photo qui montre à quel point le coucher du soleil est beau ici. D'une minute à l'autre le ciel change mais c'est toujours un superbe spectacle, surtout quand il y a des nuages. Et qui plus est visible de la fenêtre de la cuisine.",
					}
				]
			}
		];

		$scope.latestArticle = $scope.articles[$scope.articles.length - 1];

		$scope.nextArticle = function(){
			var index = $scope.articles.indexOf($scope.latestArticle);
			if(index === $scope.articles.length - 1){
				$scope.latestArticle = $scope.articles[0];
			}
			else $scope.latestArticle = $scope.articles[index + 1];
			$scope.firstImage = $scope.latestArticle.images[0];
		};

		$scope.previousArticle = function(){
			var index = $scope.articles.indexOf($scope.latestArticle);
			if(index === 0){
				$scope.latestArticle = $scope.articles[$scope.articles.length - 1];
			}
			else $scope.latestArticle = $scope.articles[index - 1];
			$scope.firstImage = $scope.latestArticle.images[0];
		};

		$scope.firstImage = $scope.latestArticle.images[0];

		$scope.nextImage = function(){
			var index = $scope.latestArticle.images.indexOf($scope.firstImage);
			if(index === $scope.latestArticle.images.length - 1){
				$scope.firstImage = $scope.latestArticle.images[0];
			}
			else $scope.firstImage = $scope.latestArticle.images[index + 1];
		};

		$scope.previousImage = function(){
			var index = $scope.latestArticle.images.indexOf($scope.firstImage);
			if(index === 0){
				$scope.firstImage = $scope.latestArticle.images[$scope.latestArticle.images.length - 1];
			}
			else $scope.firstImage = $scope.latestArticle.images[index - 1];
		};

  });

	app.config(function ($mdThemingProvider, $mdIconProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('cyan')
      .accentPalette('pink');
    $mdIconProvider
      .defaultIconSet('img/icons/sets/social-icons.svg', 24);
  });

})();
