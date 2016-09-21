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
			},
			{
				id: "11",
				title: "Sunday, sunny sunday",
				date: "21 août",
				html: [
					"Réveil plus tôt ce matin ; logique. Je ne fais pas grand chose. En début d'après-midi je me rends dans le jardin de l'International House pour l'initiation à la plongée et au rugby sous-marin. Je pensais que ce serait le point de rendez-vous pour se rendre à la piscine, mais en fait c'est un bassin improvisé dans une remorque, et on passe un par un, donc seulement quelques minutes chacun. Cette déception passée, j'essaye toute habillée une combinaison sèche deux fois trop grande pour moi. La sensation est marrante quand on chasse l'air pour que la combinaison colle à la peau. Et respirer sous l'eau s'avère plus naturel que prévu. La suite de l'heure consiste en des explications des activités du groupe : plongée en eaux profondes, plongée en surface, rugby sous-marin et bières pour récupérer. Ils ont une théorie comme quoi ça évite les problèmes de décompression. Le rugby sous-marin a l'air super fun, mais je ne nage pas assez bien ni ne sais tenir en apnée assez longtemps pour le faire. J'essaierai un autre sport, donc.",
					"",
					"De retour, je vais m'acharner près de quatre heures pour essayer d'avoir un emploi du temps qui ne nécessite pas d'être Marty MacFly ou Hermione Granger (bien que le bâtiment principal de l'université soit surnommé Poudlard). Je n'y arriverai pas, et de cet échec (re)naîtra une vaisselle propre. Je lui présente mes excuses pour un tel acharnement, mais elle n'avait qu'à pas être sale. La suite, vous la connaissez : pâtes à l'eau, chapiteau, dodo."
				],
				images: [
					{
						image: "img/011/day011_01.jpg",
						legend: "On a plongé dans le jardin ! Le groupe de plongée a même installé son étendard pour augmenter ses chances de recrutement.",
					},
					{
						image: "img/011/day011_02.jpg",
						legend: "Expérience culinaire n°11 : Les 'fiskkakker' (orthographe à vérifier, littérallement gâteaux de poisson), pour aller avec les pâtes (à moins que ce ne soit l'inverse). Visuellement on dirait une pâte blanche entre deux blinis. En fait ce serait plutôt un genre de pancakes au poisson. Un aller-retour dans la poêle et c'est prêt ; pratique et pas si mauvais !",
					}
				]
			},
			{
				id: "12",
				title: "Up and down",
				date: "22 août",
				html: [
					"Premier jour de cours. J'ouvre les yeux avant mon réveil, stressée. Mon emploi du temps sera-t-il plus clair après cette journée ?",
					"Grâce aux différents repérages de bus et de bâtiments des jours précédents, je suis au bon moment au bon endroit (comme quoi ça peut arriver). La réunion d'information, qui m'empêche d'assister à l'un de mes cours, est totalement inutile. La responsable de la faculté dont je dépends projette des slides au tableau et les lis. Slides que nous avons sur papier sous les yeux. Je ne me suis pas levée pour rien heureusement ; les responsables des différents départements vont m'éclairer un peu sur les dépendances entre les cours et me rassurer sur la flexibiité des horaires de labo.",
					"En sortant, on nous offre une collation. Il y a des gaufres avec du beurre et du 'brunost', ce fameux fromage brun un peu sucré. Ca paraît étrange, mais c'est super bon ! Enfin un truc que je vais pouvoir exporter. N'ayant rien de particulier à faire, on regarde les prix de la cafétéria : ils sont exorbitants ; on rentre manger à Moholt.",
					"",
					"L'après-midi, on se rend au laboratoire où on devrait pouvoir faire un exercice optionnel pour bien démarrer l'un de nos cours. Le laboratoire est occupé par d'autres classes, on trouve une place mais cela ne fonctionne pas correctement. Et les assistants censés nous aider ne sont pas là.",
					"Au bout d'un moment, c'est l'heure du premier amphi. Le prof nous explique le fonctionnement du cours et notamment des horaires de labo ; tout s'écroule à nouveau. Les horaires sont différents de ceux annoncés et que j'avais utilisés pour faire mon emploi du temps et pourront changer d'une semaine sur l'autre.",
					"Le cours démarre plus ou moins, je ne sais pas trop, je m'endors. L'amphi est incroyablement silencieux. Je réalise que la plupart des cours qui sont disponibles risquent d'être soit ennuyeux car j'en ai déjà fait une partie, soit difficiles parce que je n'ai pas toutes les bases recommandées pour les suivre. Que faire alors ? Choisir des cours simples quitte à s'ennuyer mais avoir plus de temps pour visiter la Norvège ? Préférer des cours intéressants même s'ils nécessitent de l'investissement, et mettre en danger le nombre de crédits validés ? Prendre quatre cours pour ne pas se surcharger ou cinq pour s'assurer ? Privilégier le travail en labo ? Le travail perso ? Les amphis ont l'air aussi pénibles ici que chez nous...",
					"",
					"Après avoir cru être rassurée, c'est encore plus confuse que je rentre chez moi. Je passe beaucoup trop de temps dans le Rema ; c'est difficile de se repérer dans un magasin dont on ne connaît pas les produits !",
					"Après le repas je décide d'aller décompresser en marchant un peu. Je pars en direction de la tour de diffusion de Tyholt, la carte de Trondheim dans la poche au cas où. La tour est en hauteur ; la vue doit être sympa de là-haut. Et effectivement, le coucher du soleil est magnifique. Je m'arrête dans un jardin près de la tour un moment. Il n'y a presque personne. Seulement le bruit du vent. Le silence doit être incroyable quand il neige.",
					"Je continue ma route et aperçoit la forteresse en contre-bas. Je décide de marcher dans sa direction, sans trop savoir si j'arriverai à l'atteindre. Il y a des maisons avec du crépit et même une en brique par ici ; toutes celles que j'avais vues jusque-là étaient couvertes de lambris peint. Je reconnais le parc de la forteresse, puis elle s'impose devant moi. Deux hommes de la sécurité attende neuf heures dans leur voiture pour aller descendre le drapeau. La vue est superbe. J'en profite plus que lundi dernier ; il avait plu.",
					"Après un moment je décide de rentrer. Il y a du monde au chapiteau, mais je n'irai pas ce soir, mon lit suffira."
				],
				images: [
					{
						image: "img/012/day012_01.jpg",
						legend: "Expérience culinaire n°12 : Salade grecque sans feta (ni gluten, mais ce n'est pas le sujet) et son croustillant de knekkebrød. Fausse Bonne Idée. Le knekkebrød perd tout son croustillant au contact de l'eau contenue dans les légumes. Ne faites pas ça chez vous.",
					},
					{
						image: "img/012/day012_02.jpg",
						legend: "Expérience culinaire n°13 : Ah, une nouvelle exportation potentielle ! Cette pâtisserie à la canelle et au chocolat est top, donc osons l'appeler par son petit nom : on t'aime Kanelsnurr.",
					},
					{
						image: "img/012/day012_03.jpg",
						legend: "Tyholt Broadcast Tower ! Et son restaurant tournant.",
					},
					{
						image: "img/012/day012_04.jpg",
						legend: "Une église rencontrée sur le chemin. Il y en a beaucoup.",
					},
					{
						image: "img/012/day012_05.jpg",
						legend: "Les bancs sont toujours entourés de fleurs. Et parfois, les dames qui promènent leurs chiens y sont assorties.",
					},
					{
						image: "img/012/day012_06.jpg",
						legend: "Un autre banc. Au retour un couple fera un selfie dessus. J'ai remarqué qu'il y avait aussi des bancs fleuris dans les jardins des maisons.",
					},
					{
						image: "img/012/day012_07.jpg",
						legend: "Le soleil se couche dans le parc de la forteresse. Et ailleurs aussi, probablement.",
					},
					{
						image: "img/012/day012_08.jpg",
						legend: "L'homme au canon.",
					},
					{
						image: "img/012/day012_09.jpg",
						legend: "La forteresse, enfin !",
					},
					{
						image: "img/012/day012_10.jpg",
						legend: "Au cas où vous doutiez que l'utilisation du verbe 'surplomber' était appropriée.",
					},
					{
						image: "img/012/day012_11.jpg",
						legend: "Forter...cette légende est-elle vraiment nécessaire ?",
					},
					{
						image: "img/012/day012_12.jpg",
						legend: "Gløshaugen aussi domine la ville avec son bâtiment Harry Potteresque.",
					},
					{
						image: "img/012/day012_13.jpg",
						legend: "La tour de Tyholt, de plus loin. Dire que j'étais là-haut il y a une demi-heure ! ...et qu'il va falloir remonter !",
					},
					{
						image: "img/012/day012_14.jpg",
						legend: "Un zoom sur les couleurs des maisons, pour le fun.",
					},
					{
						image: "img/012/day012_15.jpg",
						legend: "Après ces quelques vues, on démarre une série ca-non !",
					},
					{
						image: "img/012/day012_16.jpg",
						legend: "Souquez les artimuses, on attaque la tour ! Enfin, un truc comme ça.",
					},
					{
						image: "img/012/day012_17.jpg",
						legend: "En cas de rébellion du peuple, on peut attaquer la ville aussi.",
					},
					{
						image: "img/012/day012_18.jpg",
						legend: "Les nuages attaquent forteresse par en haut, mais les canons sont trop occupés à regarder au loin...",
					},
					{
						image: "img/012/day012_19.jpg",
						legend: "Il faut absolument que j'aille sur cette île au milieu du fjord. Mais j'irai en bateau plutôt, le canon n'est pas top niveau fiabilité.",
					},
					{
						image: "img/012/day012_20.jpg",
						legend: "Encore quelques-uns au cas où.",
					},
					{
						image: "img/012/day012_21.jpg",
						legend: "Sur le retour, je croise quelques maisons sympas.",
					},
					{
						image: "img/012/day012_22.jpg",
						legend: "Dont la seule maison en brique que j'ai vue jusqu'ici !",
					},
					{
						image: "img/012/day012_23.jpg",
						legend: "Vélo : Vite En bas, plus Lent vers le O.",
					},
					{
						image: "img/012/day012_24.jpg",
						legend: "Cherche botaniste pour identification. On dirait des petites tomates !",
					},
					{
						image: "img/012/day012_25.jpg",
						legend: "Entre temps, la tour de Tyholt s'est allumée.",
					},
					{
						image: "img/012/day012_26.jpg",
						legend: "Have a good night.",
					}
				]
			},
			{
				id: "13",
				title: "Days off",
				date: "23 et 24 août",
				html: [
					"Finalement je n'ai rien mardi puisque les heures de labo et les exercices ne commencent pas cette semaine. Je teste la laverie pour la première fois. Je me repose. Pendant ce temps, la météo joue au yoyo.",
					"",
					"Mercredi non plus, pas grand chose. J'apprends que des aurores boréales étaient visibles la veille ; je les ai loupées ! Un cours censé se finir à dix-sept heures se finit à quinze heures trente, et il y a une pause au milieu, comme toujours ici. On se renseigne pour l'inscription aux sports ; cela ne peut se faire qu'en ligne ou en liquide car ils n'acceptent que les VISA norvégiennes une nouvelle fois. Bizarre. La soirée se finira au chapiteau, en discutant des différentes sorties à venir, à plus ou moins long terme."
				],
				images: [
					{
						image: "img/013/day013_01.jpg",
						legend: "Expérience culinaire n°14 : Ici le sucre semoule s'appelle du sucre farin. Confusing."
					},
					{
						image: "img/013/day013_02.jpg",
						legend: "Expérience culinaire n°15 : J'ai enfin acheté du lait ! On n'en trouve que du frais et une bouteille coûte presque 2€. Mais bon, il y a quelqu'un sur la bouteille en bonus."
					},
					{
						image: "img/013/day013_03.jpg",
						legend: "Expérience culinaire n°16 : Il y a beaucoup de pains différents ; difficile de savoir quoi prendre. La 'baguette française' est hors de prix et n'a probablement rien à voir avec une baguette. Cet energibrød aux céréales me paraît adapté pour le matin. Et les machines de tranchage sont en libre-service dans le magasin.",
					},
					{
						image: "img/013/day013_04.jpg",
						legend: "La découverte du jour : il y a des épices en provenance de France dans les placards !"
					},
					{
						image: "img/013/day013_05.jpg",
						legend: "Expérience culinaire n°17 : Mettez un peu d'huile de colza-olive (oui oui) dans la poêle. Faites revenir les oignons rouges émincés et les pommes de terre coupées en cubes. Ajoutez-y un peu de Colombo (même si vous apprendrez plus tard en en cherchant la composition qu'il est plutôt destiné aux viandes). Remuez régulièrement, puis ajoutez de la margarine froide dans la poêle pour faire croustiller les pommes de terre. Ajoutez aussi un peu de lait pour l'aspect crémeux (puisque vous n'avez pas de crème). Une fois les pommes de terre cuites, ajoutez du sel et du Colombo pour relever le goût, l'assaisonnement précédent ayant été éteint par la cuisson. Enfin, servez avec une cuillère de margarine (car vous n'avez toujours pas de crème). Vous pouvez aussi tenter de mettre l'ensemble dans une omelette pour faire une tortilla (mais vous ne réussirez paut-être pas à ce que ça y ressemble)."
					},
					{
						image: "img/013/day013_06.jpg",
						legend: "Expérience culinaire n°18 : Pourquoi cette manie de mettre des gens sur les emballages ? J'ai acheté cette boîte de thon 'au naturel' (naturlig) à côté des boîtes de maquereaux et de sardines. Et en fait c'était du pâté de foie. Je comprends mieux le sens de 'leverpostei' maintenant."
					}
				]
			},
			{
				id: "14",
				title: "Let's party!",
				date: "25 et 26 août",
				html: [
					"Jeudi, quatre heures de cours consécutives de dix heures à quatorze heures. C'est plus intéressant que les cours précédents. Heureusement ici c'est quarante-cinq minutes de cours pour quinze minutes de pause, donc ça passe relativement vite ; c'est même certainement plus productif puisqu'on est plus concentré. Cependant la pause repas n'est pas prévue car les norvégiens mangent beaucoup le matin et peu le midi ; beaucoup mangent simplement un sandwich en classe. Moi en revanche en sortant j'ai extrêmement faim ; c'est l'occasion de tester les boutiques sur le campus. C'est environ deux fois plus cher qu'en France pour des repas étudiants. On dirait une boutique de station service. Mais c'est meilleur que le restaurant universitaire français, et de toute façon tout est cher, alors ça ou se faire son repas, c'est quasiment pareil.",
					"De retour à l'appartement je me pose un peu. Un barbecue est organisé au chapiteau pour commencer la soirée ; le jeudi les entrées des boîtes de nuit sont gratuites. J'improvise des brochettes avec des poivrons et du poulet - oui oui finalement il y en a, c'est juste qu'il n'est pas présenté sous la même forme qu'en France, ça fait bizarre ! Il y a beaucoup de monde, on attend un moment avant d'arriver à faire cuire notre viande. Puis on mange. Et on boit un peu, l'alcool sera cher en boîte ; j'ai ajouté de l'eau dans mon mélange vodka-concentré de jus d'orange. Certains jouent encore au beach volley (croyez-le où non, il y a un terrain en plein milieu de Moholt), quand le ballon arrive dans notre direction Johannes crie 'Achtung !' ; certains mots viennent par réflex dans notre langue maternelle. D'autres jouent au flunkyball ; c'est plus célèbre en Allemagne qu'en France apparemment.",
					"C'est l'heure de partir si on veut avoir le temps de profiter de la soirée. Et aussi si on veut monter dans le prochain bus, car il y a vraiment beaucoup de monde qui se dirige en ville. On y arrive, j'aide Johannes à liker sur Tinder pendant le trajet, c'est super marrant. Je ne me rappelle même pas l'arrêt auquel on est descendu ; il suffisait de suivre tout le monde. On entre au 'Downtown', je crois que le videur me dit quelque chose en français en me rendant ma carte d'identité et me tamponnant le bras. Forcément à force de voir passer des étudiants de toutes les nationalités il a dû apprendre quelques mots en plein de langues ! J'arrive à esquiver le vestiaire en accrochant mon pull façon Enséarques ; les autres sont obligés de payer pour y mettre leurs vestes.",
					"La boîte est sympa. Sur deux étages, mais pas trop grande, ce qui permet de retrouver les gens quand on les perd. Ce qui arrive très souvent car elle est bondée, à certains endroits on ne peut même pas circuler. Je navigue entre les étages qui proposent deux ambiances musicales différentes et entre les groupes de personnes que je connais ; il y en a pas mal finalement !",
					"Vers deux heures, la musique s'arrête, les lumières s'éteignent, et on nous invite à sortir. Je retrouve ceux avec qui j'étais partis pour rentrer avec eux. On a perdu mes deux colocs. On décide d'avancer quand même, puis Pascal finit par nous rejoindre, je ne sais comment. On rencontre un norvégien sur la route et on discute. J'ai envie de trouver un bus pour ne pas rentrer à pied et Michele voudrait un bateau, lui. Drunk story. Après une éternité (on marche vraiment lentement), on traverse le grand pont qui nous rapproche du campus. C'est beau aussi Trondheim la nuit. On n'avait pas encore trop eu l'occasion de le voir ; j'imagine qu'en hiver on ne se posera plus la question.",
					"On arrive enfin devant Studentersamfundet, où il y avait sans doute une soirée aussi. Devant, il y a un taxi. Sans trop réfléchir on monte dedans, c'est certainement plus avantageux. Et effectivement, non seulement c'est le moyen le plus rapide de rentrer puisqu'il ne fait pas d'arrêts et qu'il nous dépose au plus près de chez nous, mais en plus c'est le moins cher : un ticket de bus nocturne coûte 100 couronnes (et n'est pas inclus dans notre abonnement), le trajet en taxi nous en coûte 160 à diviser par quatre, soit 40 couronnes chacun, ce qui est même moins cher qu'un ticket de bus de jour à l'unité ! Ravis de cette opération, et enfin rentrés, nous partons nous coucher. J'essaye d'ouvrir la porte de la chambre de Johannes pour voir s'il est là mais c'est fermé ; j'espère qu'il n'a pas eu de problème. Je mais mon réveil pour aller en cours le lendemain ; il m'annonce gentiment que je n'ai plus que quatres heures pour dormir. Merci, bonne nuit à toi aussi.",
					"",
					"Réveil pas si difficile que prévu vendredi. Je me prépare et suis parfaitement à l'heure en cours, et ne m'y endors même pas (le traitement fonctionne, youhou !). Le prof est plutôt cool, on n'est moins nombreux dans la classe que pour les autres cours ; c'est bien. En revanche le contenu couvre des choses qu'on sait déjà ; j'espère que cela sera plus intéressants par la suite. Une fois n'est pas coutume, je remonte à pied avec Antoine. Lui aussi est perdu quant au choix des cours. Il se met à pleuvoir mais ce n'est pas si dérangeant ; il va falloir s'habituer de toute façon.",
					"Repas de midi. Je vois Pascal aller de sa chambre à la salle de bain, puis repasser dans l'autre sens. Je reste dans le salon parce que la pluie tape sur la vitre de ma chambre et c'est un peu déprimant. Quelques heures plus tard c'est Johannes qui sort de sa chambre. On discute un peu, oui oui je suis allée en cours ce matin, oui j'ai vu Pascal mais il est probablement reparti se coucher, ah et on est rentré en taxi. Je lui demande comment lui est rentré, mais c'est une 'long story' qu'il ne me racontera pas. Il me précise de ne jamais s'inquiéter pour lui. 'Lazy day' prescrit pour tout le monde. Dans la soirée je décide de regarder Madagascar, rien de tel qu'un dessin animé pour se reposer. En français, parce que je connais les répliques par coeur."
				],
				images: [
					{
						image: "img/014/day014_01.jpg",
						legend: "Expérience culinaire n°19 : Après l'effort, le réconfort. J'ai acheté cette pâtisserie après les cours jeudi, j'en vois partout donc ça doit être typique. C'est un beignet avec un creux au milieu contenant de la crème pâtissière, et entouré de noix de coco. Pas mal."
					},
					{
						image: "img/014/day014_02.jpg",
						legend: "Trondheim by night en sortie de boîte. La forteresse, la tour de Tyholt, le reflet de la ville dans l'eau, la Lune. Si je n'avais pas été dans un état post-soirée, j'aurais peut-être pensé à mieux cadrer pour avoir aussi le reflet de la Lune."
					},
					{
						image: "img/014/day014_03.jpg",
						legend: "On n'est pas fait pour être là. C'est contre-nature. Nous nageons tous en pleine conspiration frappadingue. Nous partons donc vers les glaciers de l'Antarctique ! Vers la vie sauvage ! - La vie sauvage ?! On peut vraiment y aller pour de vrai ! Qu'est-ce que c'est bien.",
					},
					{
						image: "img/014/day014_04.jpg",
						legend: "Bien installés..."
					},
					{
						image: "img/014/day014_05.jpg",
						legend: "Photo de famille devant Madagascar 2 !"
					}
				]
			},
			{
				id: "15",
				title: "Deuxième week-end",
				date: "27 et 28 août",
				html: [
					"Samedi, encore un 'lazy day' pour tout le monde. A cause de la soirée peut-être, à cause de la pluie surtout. Ca ne donne pas du tout envie de sortir. Mais il faudra le faire sinon on ne sortra jamais ! En fin d'après-midi je décide d'aller à des initiations de danse au gymnase du campus. J'ai payé l'accès au gymnase pour le semestre en ligne, il me suffit de me rendre au comptoir pour faire mettre à jour ma carte étudiante et je n'aurai plus qu'à biper en entrant les fois suivantes. Pratique.",
					"Je suis ravie d'avoir pensé à prendre un cadenas, je peux laisser mes affaires au vestiaire. Le hip-hop est enseigné par deux étudiantes hyper énergiques et super marrantes. C'est sportif et vraiment difficile, mais c'est fun ; j'essaierai de continuer. Le cours de salsa est un peu plus scolaire et surtout du niveau débutant, donc un peu ennuyeux. Mais c'est un super moyen de rencontrer des gens, et des norvégiens !",
					"",
					"Réveil bizarrement facile ce dimanche. Je vais le payer plus tard. On perd vite son rythme alimentaire au contact de polonais et d'allemands, c'est un peu le bazar. Mais ce n'est pas très grave. Ca apprend à être flexible.",
					"Vers quinze heures trente on décide de partir. Le bus est bondé, on peut à peine respirer. Quand on arrive sur le campus, le temps jusque-là au beau fixe change et il se met à pleuvoir. Il y a du maquillage pour se mettre aux couleurs de Rosenborg, le club local que nous devons supporter. On nous apprend rapidement deux chants pour que nous puissions participer à l'ambiance du stade, et nous partons.",
					"On est tous assez contents du fait que ce soit le dernier rassemblement en nombre ; c'est très pénible de toujours attendre et piétiner d'un endroit à un autre. Et puis il pleut fort maintenant, je suis trempée. On arrive sur place une heure avant le début du match. Sur un terrain synthétique à côté du stade, on nous raconte l'histoire du club. Puis il nous faut nous ranger deux par deux pour défiler dans le stade, autour du terrain. Nous parcourons la moitié puis ressortons de l'autre côté pour nous rendre dans les gradins.",
					"Personne ne respecte la place qui lui a été attribuée, on se met par groupes et c'est très bien comme ça. En face de nous se trouve la tribune des supporters de Rosenborg. Après des lancers de fumigènes et de confettis, ils vont passer le match à chanter au son d'un tambour et à sauter. Nous essayons de temps en temps de leur répondre.",
					"Le match n'est pas très intéressant mais c'est sympa d'entendre les supporters chanter et les commentaires en norvégien. Finalement Rosenborg gagne et nous rentrons finir la soirée tranquillement. Ou presque : j'ai un devoir à rendre avant minuit !"
				],
				images: [
					{
						image: "img/015/day015_01.jpg",
						legend: "Le paradoxe de cet endroit : la toute petite gare, l'énorme tour. Cette dernière a certainement été construite pour des questions d'argent : il faut pouvoir accueillir les joueurs et supporters des match de foot se déroulant au stade Lerkendal. C'est dans cet hôtel qu'a eu lieu la toute première partie de la semaine d'orientation. Il ne se fond pas du tout dans le paysage ; c'est vraiment dommage."
					},
					{
						image: "img/015/day015_02.jpg",
						legend: "Expérience culinaire n°20 : Je vais bientôt avoir fait le tour de ces choses ! C'est meilleur que les fois précédentes, même si c'est à peu de choses près identique."
					},
					{
						image: "img/015/day015_03.jpg",
						legend: "Expérience culinaire n°21 : Je m'attendais à des gâteaux d'une certaine épaisseur, mais en fait ce sont de crackers. Ah oui, 'knäckebröd'. Faudrait vraiment que je lise les étiquettes. Le goût de canelle est très léger."
					},
					{
						image: "img/015/day015_04.jpg",
						legend: "Expérience culinaire n°22 : Un wrap local ! Enfin, le contenu pas tellement, mais la galette de pomme de terre oui. C'est sympa, ça change de l'habituel wrap au maïs et c'est très bon ; je garde l'idée."
					},
					{
						image: "img/015/day015_05.jpg",
						legend: "Il fait super beau ! Voilà qui est de bonne augure pour le match de ce soir. Enfin, ne vendons pas la peau de l'ours avant de l'avoir tué, le temps peut changer du tout au tout en quelques heures ici."
					},
					{
						image: "img/015/day015_06.jpg",
						legend: "Et voilà, maintenant il pleut ! Peinturlurés et en rang deux par deux, on s'apprête à entrer dans le stade."
					},
					{
						image: "img/015/day015_07.jpg",
						legend: "Je profite de la parade pour prendre quelques photos."
					},
					{
						image: "img/015/day015_08.jpg",
						legend: "A contre-jour une nouvelle fois dans cette ville."
					},
					{
						image: "img/015/day015_09.jpg",
						legend: "Bataille de logos : Scandic, Thales et Rosenborg BK."
					},
					{
						image: "img/015/day015_10.jpg",
						legend: "Les supporters en face sont déchaînés dès le début du match."
					},
					{
						image: "img/015/day015_11.jpg",
						legend: "Ici ce ne sont que des filles qui renvoient et ramassent les ballons. Elles sont super jeunes !"
					},
					{
						image: "img/015/day015_12.jpg",
						legend: "Ah, il y a eu un match de foot au fait. Score final 3 - 1."
					}
				]
			},
			{
				id: "16",
				title: "Où les choses sérieuses commencent",
				date: "29 août",
				html: [
					"Réveil à sept heures...arg, ça existe encore ça ?! Moi qui croyait que le rythme de vie était plus tranquille ici... Je ne peux même pas monter dans le premier bus tellement il y a de monde, il faudra que j'envisage de partir plus tôt quitte à attendre le début des cours, ce qui signifierait se lever plus tôt...bon j'envisagerai plutôt de partir en retard la prochaine fois. Heureusement un deuxième bus arrive deux minutes après au lieu de dix ; le premier était donc en retard ce qui explique peut-être l'affluence.",
					"Aujourd'hui a lieu notre premier TP. C'est l'occasion de comparer le fonctionnement de ceux-ci en France et en Norvège.",
					"En France, les élèves doivent arriver plus ou moins à l'heure. Ils trouvent alors la salle ouverte et s'installent. Le prof arrive généralement un peu après et explique le fonctionnement du TP du jour. Même si dans la plupart des cas le sujet est disponible en ligne, cela permet d'avoir quelques précisions. Les sujets sont généralement très guidés.",
					"En Norvège, les élèves arrivent quand bon leur semble. Cependant les étudiants assistants sont là avant l'heure et n'ouvrent la salle qu'à l'heure pile pour leur permettre de s'installer. Aucune explication n'est fournie, chacun doit se débrouiller avec le sujet fourni en ligne, qui n'est pas très guidé, ce qui pour nous s'avère déroutant : 'It's your program right? You do what you want.'",
					"En France, les élèves sont censés rester dans la salle la majorité du temps. La pause est à la même heure pour tout le monde. Et les TP excèdent rarement quatres heures afin de permettre une pause déjeuner conséquente. Manger en classe est interdit. Le TP, terminé ou non, donne lieu à la rédaction d'un rapport qui doit généralement est rendu à l'issu du temps imparti et dont la note est connue bien plus tard.",
					"En Norvège, les élèves organisent leur temps de travail comme bon leur semble : ils peuvent faire les pauses qu'ils veulent et partir bien avant la fin si leur travail est terminé. En revanche la notion de pause déjeuner n'existe pas, il est tout à fait possible de ne pas en avoir dans l'emploi du temps, et tout à fait normal de ne manger qu'un sandwich ou une soupe avec du pain, éventuellement en classe. Le TP donne lieu à une validation du travail effectué dès que les élèves ont terminé. Les points sont attribués immédiatemment en pourcentage sur la note finale. Un TP non terminé doit l'être pour validation lors de la séance suivante.",
					"Ce contexte mis en place, voici ce qui s'est passé. Nous sommes arrivés un peu avant l'heure et avons dû attendre l'ouverture de la porte pour entrer. Le labo étant disponible six heures consécutives, nous pensions que le TP prendrait bien moins de temps. Finalement il s'est avéré tellement difficile que nous sommes restés les six heures sans même faire de pause. Nous avons réussi à faire valider notre travail in extremis parce qu'un des assistants a accepté de rester un peu plus pour nous aider. Nous sommes sortis de la salle à quatorze heures trente et avons donc mangé à la cafétéria vers quinze heures sans que cela pose de problème. La nourriture est vendue au poids, il vaut mieux ne pas avoir les yeux plus gros que le ventre !",
					"",
					"Après une telle matinée, l'amphi qui suit s'avère plus qu'ennuyeux. Je rentre épuisée. Je veux faire une quiche aux poireaux mais n'ai ni pâte (pas trouvée dans les magasins) ni moule à tarte, et même plus assez de farine pour faire une quiche sans pâte (il y en avait assez la veille mais la moitié a été utilisée ; je n'ai pas le courage de retourner en chercher). Ce sera donc une quiche sans pâte ni assez de farine dans un moule à gratin.",
					"Expérience plutôt réussie. Johannes cuisine aussi, oignons-tomates-viande-maïs-haricots rouges-céréale non identifiée-concentré de tomate. Pas mal. Ca fait plaisir de voir que la génération Y fan de fast food et qui ne respecte rien sait cuisiner des plats équilibrés. Et toc !",
					"Inutile de préciser que l'épuisement ne me permet pas de préparer le TP du lendemain ou d'avancer le devoir pour mercredi. Les aurores boréales censées être assez visibles cette nuit ne le sont finalement pas et de toute façon il y a des nuages ; il est donc temps de dormir."
				],
				images: [
					{
						image: "img/016/day016_01.jpg",
						legend: "Un des nombreux amphis de l'université. (Bonne nuit Pauline !)",
					},
					{
						image: "img/016/day016_02.jpg",
						legend: "Expérience culinaire n°23 : Testons l'efficacité d'un four norvégien sur une adaptation d'une recette française.",
					},
					{
						image: "img/016/day016_03.jpg",
						legend: "Expérience culinaire n°23 (suite) : Le résultat n'est d'évidence pas plus une quiche qu'une tarte (dédicace à ceux qui se reconnaîtront dans ce débat). L'appelation de flan aux poireaux semble appropriée.",
					}
				]
			},
			{
				id: "17",
				title: "Au revoir, mois d'août",
				date: "30 et 31 août",
				html: [
					"Mardi, nouvelle séance au labo. Les assistants sont là à partir de onze heures pour nous aider, j'arrive donc à cette heure-là. Une fois le matériel récupéré, on démarre... C'est super dur. L'alarme incendie retentit deux heures après : c'est drôle, ce n'est pas du tout la même qu'en France (comme toutes les sirènes et alarmes que j'ai pu entendre). Il y a quelques tonalités avant qu'une voix disent, en norvégien puis en anglais : 'This is a fire alarm. Leave the building. Use the emergency exits. Do not use the elevators.'. Plutôt que de perdre du temps à attendre de pouvoir rentrer dans le bâtiment, on décide de profiter de l'occasion pour aller manger. La veille buffet hamburger, cette fois buffet tacos ; sympa.",
					"On finit l'exercice vers dix-huit heures trente grâce à l'aide d'un assistant. C'est vraiment éprouvant de rester une journée entière assis dans une même pièce, où il fait d'ailleurs bien trop chaud. Une fois rentrée je vais prendre un peu l'air, découvre des endroits au hasard. Michele et Thierry nous rejoignent et nous planifions tous les cinq les sorties à venir. Le week-end dans deux semaines, excursion cabines ! Vous ne savez pas ce que c'est, mais je vous en dirai plus plus tard. Deux semaines après, excursion Lofoten, si on trouve un moyen pas trop cher de s'y rendre, s'y déplacer et y dormir. Et plus tard, excursions Bergen, puis Tromsø. Plein de projets en vue, c'est cool. Les nuages ne nous laisserons pas voir les potentielles aurores boréales ; je vais me coucher.",
					"",
					"Mercredi, journée plus tranquille. Je profite de la matinée pour finir et rendre un devoir à faire en ligne. Je reçois un message de Pascal et Michele : ils n'ont pas réussi à avoir l'une des trois cabines où nous souhaitions aller, mais ils ont réservé des places dans une autre. Les trois heures d'amphi sont plutôt ennuyeuses encore une fois. Je rentre poser mes affaires puis repart au gymnase tester le cours de danse contemporaine. On est seulement deux ou trois à ne pas parler le norvégien ; le cours est donc en norvégien. Je ne bénéficie donc pas des explications et des conseils, mais je peux copier les mouvements ; ça reste sympa. Et je saurais vite compter jusqu'à huit en norvégien !",
					"Sur le retour je passe au Rema. Je suis d'humeur à essayer de nouveaux trucs, et puis, ça fera quelques photos !"
				],
				images: [
					{
						image: "img/017/day017_01.jpg",
						legend: "En voilà des composants bien rangés !",
					},
					{
						image: "img/017/day017_02.jpg",
						legend: "Donc...on est censés assembler tout ça avant la fin du semestre ?!",
					},
					{
						image: "img/017/day017_03.jpg",
						legend: "Expérience culinaire n°24 : Dansk rugbrød. Si dansk signifie dense, alors il porte bien son nom.",
					},
					{
						image: "img/017/day017_04.jpg",
						legend: "Expérience culinaire n°25 : Je ne sais pas si ce salami est bon, je n'en mange jamais en France.",
					},
					{
						image: "img/017/day017_05.jpg",
						legend: "Expérience culinaire n°26 : Rien d'exceptionnel mais un petit goût sympa et des herbes pour le relever.",
					},
					{
						image: "img/017/day017_06.jpg",
						legend: "Expérience culinaire n°27 : Il paraît qu'ils mangent beaucoup de tartines ici. Margarine salami, pâté de foie et fromage.",
					},
					{
						image: "img/017/day017_07.jpg",
						legend: "Expérience culinaire n°28 : Je pensais que c'était surtout du chocolat, avec peut-être un feuilleté ou un biscuit à l'intérieur. Que nenni ! C'est une étrange mousse à la noix de coco.",
					},
					{
						image: "img/017/day017_08.jpg",
						legend: "Shut down.",
					}
				]
			},
			{
				id: "18",
				title: "On a testé pour vous : le rendez-vous chez le médecin",
				date: "1er et 2 septembre",
				html: [
					"Bonne nouvelle ce jeudi matin : ESN (Erasmus Student Network) m'a attribué une buddy norvégienne et elle m'a déjà envoyé un message pour qu'on se rencontre, c'est un super moyen d'en savoir un peu plus sur la Norvège ! Après ça a lieu un journée de cours à peu près normale. Le cours de l'après-midi est dédié aux exercices ; en fait on n'y fait pas d'exercices, on nous donne juste des méthodes pour les faire, mais ceux-ci sont à faire sur notre temps libre. Les séances d'exercices sont plus des foires aux questions. Quand je rentre, le polonais a disparu (sa copine est partie quelques jours plus tôt) et a été remplacée par celle qui lui sous-louait la chambre pour l'été. Elle s'appelle Jordanos.",
					"Je repars au gymnase essayer le hip-hop. Les deux instructeurs sont super fun et on s'éclate. En rentrant je joue aux cartes avec mes colocs et quelques autres avant de partir en ville. Les garçons se préparent des bouteilles à boire sur la route ; ils utilisent des bouteilles de smoothie vides, qui sont maintenant pleines de 'vodkamine C'. Dans le bus qui descend en ville, c'est le bazar. On arrive à s'asseoir mais un groupe d'allemands (entre autres !) debouts chantent et sautent, à tel point que le bus s'immobilise et éteint les lumières. Le chauffeur veut faire comprendre qu'il ne roulera pas dans ces conditions. Après maintes tentatives pour ramener le calme, le bus redémarre. Nous avions prévu d'essayer une nouvelle boîte mais tout le monde semble aller au Downtown, où nous étions la dernière fois ; nous suivons le mouvement.",
					"L'entrée se fait plutôt efficacement par rapport à la France, et ce malgré le nombre. Johannes nous paye des bières avant de disparaître, encore plus vite que la semaine précédente. On danse, on croise pas mal de têtes connues, puis on rentre en taxi comme la fois précédente.",
					"",
					"Le réveil n'est pas si difficile vendredi. Je vais tranquillement à Gløshaugen pour mon rendez-vous de médecin. Dans le bus entre un groupe d'enfants et leurs deux accompagnatrices. Au moment même où je me dis que je devrais me lever pour les laisser s'asseoir, deux norvégiens le font, et j'en fais autant. J'ai l'impression qu'il y a plus de savoir-vivre ici, mais c'est peut-être aussi parce que je n'observe pas les choses aussi attentivement en France. Dans un moment de lucidité, je prends du liquide au cas où le médecinne prenne pas les cartes bancaires internationales.",
					"La salle d'attente est incroyablement calme. Le silence n'est rompu que par des petits sons aigüs émis à intervalles réguliers par un enfant, qui par ailleurs se tient très bien. Je me demande s'il peut parler avant d'entendre le son de sa voix ; ce bruit est donc un genre de manie. Sans savoir vraiment pourquoi, je suis angoissée ; je sens ma respiration qui s'accélère. Je me demande simplement si j'ai bien fait de m'asseoir dans cette salle d'attente ; aurait-il fallu que je m'annonce avant ? Rien ne me dit que le fonctionnement est le même ici. J'ai la peur idiote de ne pas reconnaître mon nom quand on m'appelera. J'attends malgré tout. Et, au bout d'un moment, l'un des médecins m'appelle. Je n'aurais pas dû m'en faire pour mon nom, il n'est pas si difficile à reconnaître, même dans la bouche d'un étranger.",
					"Je me dirige dans la direction d'où venait la voix ; heureusement j'ai repéré une flèche indiquant la direction à prendre pour aller dans le bureau du médecin qui m'a été attribué. Je regarde à droite puis à gauche, et l'aperçoit y entrer. Je le suis ; il m'indique où m'asseoir. C'est étrange, il est assis face à son bureau et au reste de la pièce, mais ma chaise n'est pas de l'autre côté du bureau, elle est à côté. Si bien que même si nous ne sommes pas séparés par un bureau, il fait face à une pièce vide et moi au mur derrière lui. J'explique la situation le plus calmement possible et avec des mots simples pour ne pas me perdre dans mon anglais, puis lui tend la lettre de mon médecin. Il pose quelques questions avant de m'expliquer que le médicament qui me tient éveillée est aussi régulé ici qu'en France et qu'il va falloir que je me rende en psychiatrie pour qu'ils puissent me le prescrire. Il prépare une lettre à leur attention pour qu'ils fixent une date pour un check-up avant que je sois à court de médicaments.",
					"C'est donc sans rien de concret, hormis une lettre pour l'assurance, que je ressors de la pièce. Je n'ai plus qu'à attendre. Le paiement se fait sur une machine automatique : on rentre sa date de naissance puis on paye par carte norvégienne ou en liquide. J'ai bien fait.",
					"",
					"Je fais un tour en ville pour recharger ma carte prépayée. Cette ville est vraiment agréable, il faut que je sorte plus. En rentrant je travaille un peu ; le premier exercice a pour titre quelque chose du genre 'Conception d'un ordinateur', rien que ça !",
					"",
					"La probabilité de voir une aurore boréale est élevée cette nuit, et en plus le ciel n'est pas trop nuageux pour une fois. Je décide de veiller un peu au cas où. Je regarde régulièrement par la fenêtre de la cuisine, qui donne au Nord, toutes lumières éteintes. Peu avant minuit, je décide de sortir : quitte à être restée éveillée, autant aller faire un tour. Je rencontre une chaise en essayant de ne pas faire de bruit pour mes colocs ; raté. En sortant de l'immeuble je vois un gars arriver, je lui tiens donc la porte pour qu'il entre. Il me remercie et je continue mon chemin. Je pars vers le Nord ; l'étoile polaire me sert de repère. Soudain j'entends courir derrière moi. Je me retourne : c'est le gars de tout à l'heure. Je me demande ce qu'il fabrique. J'espère que ce n'est pas après moi qu'il court. C'est le scénario qu'on est malheureusement amenée à envisager quand on est une fille seule dans la nuit. Je me dis que je me fais des idées et continue d'avancer. Il crie quelque chose. Mais qu'est-ce qu'il fabrique ? Il crie autre chose, plus distinctement cette fois. 'Excuse me!' Merde. C'est vraiment après moi qu'il en a. Je m'arrête, me retourne. Il s'approche, une main dans la poche. Instant scénario catastrophe dans ma tête encore : que va-t-il en sortir, un couteau ? Va-t-il falloir que je fasse un mouvement de recul ? Il sort sa main, vide, de sa poche. Ouf. 'I saw you somewhere else.' J'attends qu'il continue. 'I saw you somewhere else.' Il va falloir développer un peu là, tu viens de me faire peur en me courant après en pleine nuit, je ne vais pas en plus lancer la conversation si ? Eh bien si. 'Ok. Where?' 'I don't know. Do you have Tinder?' Le gars se rappelle de tous les profils Tinder qu'il voit ? Trop flippant. Il me demande mon nom, si j'habite l'immeuble duquel je suis sortie, ce que je fais là. J'explique pour l'aurore boréale. Il me demande si j'y vais seule (eh gars, on dit 'alone', pas 'single' dans ce cas-là, ça fait bizarre de demander direct à une fille si elle est célibataire...), puis à m'accompagner. J'aurais dû dire non. Mais j'ai dit oui. Parce que c'est plus facile de dire oui. Les gens exigent toujours qu'on justifie le non. Ils veulent le comprendre, ne l'acceptent pas tel quel. Il commence à discuter, qu'est-ce que j'étudie, d'où je viens etc. Je réponds et demande en retour par politesse mais ça commence à être lourd. 'So you don't have friends here?' Ben si (et je t'*******). J'aime juste me promener seule. Je regarde le ciel. Il me montre le faisceau d'un phare de boîte de nuit sur les nuages. Gars...tu sais même pas ce qu'est une aurore boréale ? Je ne peux pas m'éloigner des zones éclairées avec lui, je ne me sens pas en sécurité. Excursion is over. J'annonce que j'abandonne et on rentre. Il habite au 15 et moi au 17, ouf, au moins il ne saura pas à quel étage je vis. La prochaine fois je lancerai un appel sur Facebook pour me faire accompagner.",
					"Une fois rentrée, j'attends un peu, puis je redescend. Pas question que je renonce. Mais je ne me sens plus en sécurité, le moindre bruit de pas m'angoisse. Pas l'ombre d'une aurore boréale ; je rentre. Je regarde les prévisions et a priori j'étais dehors au meilleur moment ; ce ne sera donc pas pour cette fois. Je vais me coucher. Un peu agacée tout de même. On devrait pouvoir se balader seule, même la nuit, sans que personne ne vienne nous déranger. Enfin, j'en fais peut-être trop, il ne pensait certainement pas à mal, mais quand on a vécu deux ans à Cergy, on est sur la défensive !"
				],
				images: [
					{
						image: "img/018/day018_01.jpg",
						legend: "Il faut profiter au maximum de la lumière du jour en cette fin d'été.",
					},
					{
						image: "img/018/day018_02.jpg",
						legend: "Et maintenant, au boulot !",
					},
					{
						image: "img/018/day018_03.jpg",
						legend: "Ben ouais, quand on achète un truc en vrac, mieux vaut prendre une photo des conseils de préparation pour les traduire plus tard.",
					},
					{
						image: "img/018/day018_04.jpg",
						legend: "Expérience culinaire n°29 : Pâtes au saumon, top ! Mais faut pas en abuser, il frit dans sa propre graisse. #saumon #pâtes #crèmefraiche #norvège #vousMeFatiguezTousAvecVosHashtagsInutiles",
					}
				]
			},
			{
				id: "19",
				title: "No equipment no trip (to be or not to be Bob Marley)",
				date: "3 et 4 septembre",
				html: [
					"Trop dur de se réveiller quand on a chassé l'aurore boréale (sans la voir en plus). J'ai rendez-vous à une heure à Baklandet avec ma buddy. C'est un quartier super mignon avec des cafés. J'y suis à l'heure dite. Il y a une course à pied qui passe là, ça me permet de me fondre dans les spectateurs sans donner l'impression d'être en train d'attendre ou de chercher quelqu'un. Elle arrive quelques minutes après puis me propose d'entrer dans un café. On choisit chacune un gâteau à la canelle, mmmh. On discute pendant environ une heure pour apprendre à se connaître, c'est sympa. Comme je le ai dit que j'avais besoin d'équipement de randonnée, elle propose de me guider jusqu'à un magasin de sport en ville.",
					"Le magasin est petit et ne propose pas beaucoup de choix. Elle me dit que je ferais mieux d'aller au centre commercial à l'extérieur de la ville, puis se renseigne auprès d'un ami pour me dire quel bus prendre, sympa. Je la laisse là et prend le bus. Arrivée sur place, je suis un peu perdue : comment trouver le ou les magasins de sport ? Après un tour global du centre, il s'avère qu'il n'y en a qu'un. Tout y est cher et je ne sais pas vraiment quoi acheter. J'essaye de me faire conseiller par un vendeur mais il n'est pas d'une grande aide. Finalement je finis par abandonner et rentrer.",
					"En rentrant je fais quelques recherches : en fait le magasin qu'elle m'avait conseillé n'est pas dans le centre commercial mais à côté. Et Johannes me dit que puisque c'est l'été, je n'ai pas besoin de tout acheter maintenant, et me conseille de surveiller le groupe facebook où les étudiants vendent des affaires d'occasion. Les gens comme moi qui stressent pour pas grand chose devrait toujours discuter avec des gens qui ne se prennent pas la tête. Parce que plus tard dans la soirée, je concluerai un accord pour acheter un sac de couchage de bonne qualité pour un prix tout à fait raisonnable.",
					"Les autres sont dans le salon avant de partir en ville pour la soirée. Tous les jeudis et samedis, ils sont courageux ! Moi je reste regarder 'Mr Nobody' ; très bon film. Et en anglais sous-titré anglais, t'en qu'à faire.",
					"",
					"La matinée file jusqu'au moment où je récupère mon sac de couchage. Cool, une bonne chose de faite. En fin d'après-midi, Skype d'anniversaire pour mon petit frère (et vive le stock de bougies !). Le soir, on décide d'aller manger dans le restaurant en haut de la tour de Tyholt. Malheureusement la partie supérieure du restaurant, qui tourne, est pleine. On s'intalle donc en bas, la rotation ça sera pour la prochaine fois. On rentrera après avoir profité de la vue de nuit, le ventre plein de pizza."
				],
				images: [
					{
						image: "img/019/day019_01.jpg",
						legend: "Expérience culinaire n°30 : Je n'ai pas pris en photo le Kanelbolle que j'ai mangé au café, mais cette photo trouvée sur internet est assez fidèle.",
					},
					{
						image: "img/019/day019_02.jpg",
						legend: "Merci les sous-titres. Sans vous j'aurais eu du mal à comprendre le film.",
					},
					{
						image: "img/019/day019_03.jpg",
						legend: "La lumière du soleil couchant...et les reflets dans la vitre.",
					},
					{
						image: "img/019/day019_04.jpg",
						legend: "La nuit tombe petit à petit.",
					},
					{
						image: "img/019/day019_05.jpg",
						legend: "Je profite de la lumière restante pour faire le tour du panorama.",
					},
					{
						image: "img/019/day019_06.jpg",
						legend: "Prendre des photos de nuit à travers du double vitrage est un challenge.",
					},
					{
						image: "img/019/day019_07.jpg",
						legend: "Côté terre.",
					},
					{
						image: "img/019/day019_08.jpg",
						legend: "On n'est pas très haut, mais on dirait quand même une maquette en bas !",
					},
					{
						image: "img/019/day019_09.jpg",
						legend: "La nuit est franchement tombée maintenant.",
					},
					{
						image: "img/019/day019_10.jpg",
						legend: "Retour sur le fjord.",
					},
					{
						image: "img/019/day019_11.jpg",
						legend: "Puis sur une vue similaire à l'une des précédentes.",
					},
					{
						image: "img/019/day019_12.jpg",
						legend: "La contre-photo.",
					},
					{
						image: "img/019/day019_13.jpg",
						legend: "It's time for a selfie! Deux allemands, deux français et deux italiens sont en haut d'une tour. Qui tombe à l'eau ?",
					}
				]
			},
			{
				id: "20",
				title: "Le calme avant la tempête",
				date: "5, 6, 7, 8, 9 septembre",
				html: [
					"Heureusement qu'on a bossé ce week-end avec Antoine, ça nous évite de passer six heures sur le TP de lundi. Et ça me laisse du temps pour la laverie, le ménage et 'Nos étoiles contraires'. Rien d'exceptionnellement norvégien.",
					"",
					"Encore un terrible mardi de labo. Après une quasi-impossibilité à me lever, on passe deux heures à améliorer les tailles et le code couleur des fils pour que notre travail soit correct. Le soir, on se réunit pour parler un peu de notre randonnée cabine de samedi. Il n'y a qu'un bus aller et un retour à des horaires pas du tout avantageux et ce n'est pas beaucoup plus cher de louer une voiture...le choix est fait !",
					"",
					"Mercredi, expédition équipement de randonnée ! Pour de bon cette fois. Antoine et moi trouvons le 'Sport Outlet' et le 'XXL Sport' à Lade. Les prix sont raisonnables compte-tenu de la qualité. Evidemment comme je partais de rien cela représente quand même une certaine somme.",
					"",
					"Après les cours et le dîner, je retourne au hip-hop. C'est toujours aussi dur mais c'est vraiment fun. Les instructeurs mettent l'accent sur le fait de s'amuser, de se regarder dans le miroir et de s'aimer, et de ne pas s'inquiéter du regard des autres car chacun est concentré sur soi. C'est vraiment agréable comme approche. Ensuite je me rends à la 'pre-party' organisée par ESN dans une salle de classe. Oui oui. Un water-pong plus tard, je retourne au gymnase pour la salsa cette fois. C'est vraiment top, je m'éclate là aussi. Ces deux cours m'ont convaincue de participer à la soirée du week-end prochain, je m'y inscris en rentrant.",
					"",
					"Déjà vendredi ! Moi qui pensait arriver à avancer dans mes 'assignments' cette semaine, c'est raté. John est allé chercher la voiture de location ; il nous envoie une photo. On fait les courses tous ensemble pour prévoir le dîner de samedi soir à la cabine. Puis c'est l'heure de préparer les sandwichs et de remplir nos sacs. Le sac de couchage que j'ai acheté est bien trop gros ; heureusement Maxime peut me prêter le sien et je ferme mon sac à temps avant une bonne nuit de sommeil."
				],
				images: [
					{
						image: "img/020/day020_01.jpg",
						legend: "C'est possible de salir autant en si peu de temps ? Je préfère penser que c'était sale avant que j'arrive.",
					},
					{
						image: "img/020/day020_02.jpg",
						legend: "Vous vous rappelez de la breadbord vide mardi dernier ? Voilà comment elle était à la fin.",
					},
					{
						image: "img/020/day020_03.jpg",
						legend: "On essaye de faire propre, mais ça se complique quand il s'agit de communiquer avec l'ordinateur.",
					},
					{
						image: "img/020/day020_04.jpg",
						legend: "Juste pour le fun, parce que la soirée de parrainage aura lieu bientôt à l'ENSEA (sans moi !).",
					},
					{
						image: "img/020/day020_05.jpg",
						legend: "Expérience culinaire n°31 : Des boulettes de poisson. Simple à préparer et plutôt sympa.",
					},
					{
						image: "img/020/day020_06.jpg",
						legend: "'Mary and Max' : très joli film sur le syndrome d'Asperger. La façon dont le sujet est traité est touchante. J'ai aussi regardé 'Nos étoiles contraires' cette semaine, et je valide.",
					},
					{
						image: "img/020/day020_07.jpg",
						legend: "Expérience culinaire n°32 : Digne d'une baguette de supermarché en France. Donc bof, quoi.",
					},
					{
						image: "img/020/day020_08.jpg",
						legend: "'On utilise de l'eau pour ne pas avoir à changer les verres puisque personne ne boit dedans. Et puis comme ça on ne salit pas le sol, et on ne boit pas ce qui a été en contact avec la balle et donc indirectement le sol.' Aaaah. Que de sens pratique ici.",
					},
					{
						image: "img/020/day020_09.jpg",
						legend: "Expérience culinaire n°33 : Je ne m'arrêterai pas avant d'avoir fini le rayon, c'est dit. Un mix des deux précédentes, mais pas la meilleure.",
					},
					{
						image: "img/020/day020_10.jpg",
						legend: "Tout est prêt. Départ à l'aventure imminent.",
					}
				]
			},
			{
				id: "21",
				title: "Cabin trip: first but not least",
				date: "10 et 11 septembre",
				html: [
					"A peine les yeux ouverts, je me sens bien. Je me demande quelle est la part dûe au fait que je me sois couchée tôt pour être en forme, et celle dûe à l'excitation du voyage. J'ai prévu just assez de temps pour me préparer sans me presser. J'appréhende malgré tout ; je ne suis pas une grande marcheuse, je ne voudrais pas être le boulet du groupe.",
					"A dix heures pétantes comme prévu, on est au pied de la voiture, prêts à embarquer. J'ai le plus gros sac à cause du sac de couchage...j'en rachèterai un d'ici la prochaine fois. Les autres nous rejoignent puis on récupère Luca à Steinan, et c'est parti. J'ai réussi à obtenir de ne pas voyager au fond ; Pauline, voiture et routes de montagne ne faisant pas bon ménage.",
					"Sur fond de vieux rock qui satisfait tout le monde, interrompu de temps en temps par des directives en anglais données par le GPS, le paysage défile. Je reconnais la route par laquelle on est arrivés la première fois, et en effet on passe devant l'aéroport. Puis on est cerné par les montagnes, avec des plans d'eau de-ci de-là. Je surveille le compteur d'un oeil, mais pas de problème : John se contente de mettre le régulateur à la vitesse maximale autorisée.",
					"Je me sens rarement aussi ancrée dans le présent que maintenant. L'excitation de l'inconnu et la beauté du paysage me tiennent éveillée. Bientôt on arrive et on se gare près du musée, comme conseillé. Nous n'avons pas pu obtenir de carte pour atteindre la cabine ; il faudra donc faire sans. Chacun mange le déjeuner qu'il a préparé, puis on entame la montée sur le seul chemin qu'il nous semble plausible de suivre.",
					"Nous marchons plutôt vite, mais je ne peine pas, même malgré le sac. Au début le paysage n'est pas très intéressant, on est au milieu des arbres. Mais on est en pleine nature, et ça c'est vraiment agréable. On dirait que la végétation hésite entre le vert de l'été et les couleurs chaudes de l'automne. Alors que le trajet devait durer deux heures, nous apercevons la cabine après une heure et quart. Un panneau indique comment l'atteindre ; nous y sommes.",
					"Comme sans doute tant d'autres en Norvège, Holmsakoia (en norvégien les cabines sont appelées koiene) est une petite maison en bois. Au rez-de-chaussée se trouve une longue table et de quoi s'asseoir, mais aussi un chauffage au bois, un semblant de cuisine, une guitare et un piano. Cette grande pièce donne accès à deux chambres qui logent quatre et six personnes. A l'étage, sous les combles, une dizaine de personnes peuvent dormir sur des matelas. Il semble d'ailleurs qu'un groupe y soit déjà installé.",
					"Devant la maison se trouvent les restes d'un feu de camp. Il y a deux bâtiments aux alentours : l'un pour les toilettes sèches et un stock de bois, l'autre doit être le sauna. Du bois de diverses origines et dimensions se trouve tout autour de la cabine. Et en contrebas, on voit le ruisseau que l'on a longé en venant.",
					"",
					"Après avoir essayé la guitare et le piano, nous décidons de poser nos affaires et d'aller faire un tour au lac, plus haut. Nous reprenons donc la route que nous avions quittée pour marcher dans cette direction. Les bords du lac sont très humides, voir marécageux. Mais le paysage est magnifique. On trouve un endroit pour s'arrêter, mais seulement trois d'entres nous seront assez courageux pour se baigner. L'eau est froide mais après un moment on s'habitue. Un concours de ricochets plus tard et après avoir crcoisé un groupe qui a dormi à la cabine la nuit dernière, nous rentrons.",
					"Le groupe que nous avons croisé est là, sur le départ. Un autre groupe démarre un feu de camp devant la maison. Les garçons allument un feu pour le sauna. La première fois, il fait soixante degrés. Je ne savais même pas qu'on pouvait supporter une telle chaleur. On y reste une dizaine de minutes avant de descendrese rafraîchir à la rivière. J'y vais doucement, ce chaud-froid sonne dangereux. Les garçons eux se lancent mutuellement de l'eau à la figure. Globalement tout le monde crie à cause du choc thermique, cela doit bien faire rire les autres là-haut. Nous recommençons. Sommes un peu plus téméraire à la rivière. Faisons rentrer un peu d'oxygène dans le sauna où on étouffe avant de le faire chauffer encore plus. Comment n'est-ce pas dangereux d'atteindre quatre-vingt degrés dans un bâtiment en bois ? Trois fois seront suffisantes. Je m'assois dans l'eau pour redescendre en température.",
					"Nous échangeons de place avec l'autre groupe : on a préparé le sauna, eux le feu de camp et le chauffage à l'intérieur ; c'est parfait. On les entend à leur tour crier depuis la rivière, et effectivement c'est très drôle. Nous mettons la grille sur le feu et faisons cuire les saucisses que nous avions prévu pour faire des hot-dog, et c'est une super idée. Nous restons autour du feu. La nuit tombe doucement. Les autres préparent du riz et des champignons qu'ils ont ramassé (seulement les champignons hein). Ils ont une 'experte' qui sait lesquels manger. Nous faisons griller des chamallows autour du feu. A vingt-deux heures, c'est déjà la nuit noire. Il commence à pleuvoir ; nous rentrons.",
					"A l'intérieur, la tablée mange à la lumière des bougies et des lampes à huile. Nous jouons aux cartes : chacun une bougie pour éclairer son jeu, et une au centre pour voir les cartes qui sont posées. Je n'ai plus d'eau ; j'en trouve dans la cuisine que les autres ont l'air d'avoir fait bouillir, enfin j'espère. Eh oui, c'est un peu idiot de manger de chamallows quand on n'a pas beaucoup d'eau potable. Quelqu'un de l'autre groupe s'arme de la guitare pour faire chanter tout le monde. C'est vraiment un super moment. Là, maintenant.",
					"Pas de problème de température cette nuit, le chauffage au bois de la maison suffit. Les autres sont un peu bruyants au matin. Ils sont venus en bus mais ne veulent pas attendre le seul de la journée à plus de dix-neuf heures ; ils ont donc décidé de partir pas groupes de deux ou trois à intervalles réguliers afin de faire du stop. Ils sont onze ; bon courage.",
					"On ne peut pas vraiment profiter de la matinée ; il pleut. On range la cabine et le sauna du mieux que possible pour les suivants. Puis à onze heure trente, nous repartons. Michele fait remarquer qu'il est là depuis un mois ; c'est le cas pour mos aussi. Le temps passe bien trop vite ; presque un quart du voyage s'est écoulé et on a le sentiment de n'avoir encore rien fait. Nous finissons la marche tranquillement, projetant les prochaines découvertes. J'ai apprécié que la musique soit mise en voiture et dans la soirée mais que le silence de la nature ait été respecté le reste du temps.",
					"Nous arrivons à la voiture vers midi et demi et partons. Sur la route nous ne verrons que deux auto-stoppeurs du groupe précédent ; j'espère que cela signifie que les autres ont réussi. C'est drôle de voir le même paysage dans deux sens différents, on dirait que ce n'est pas le même. Les montagnes sont dans la brume. Il y a des cascades. Les plans d'eau sont noirs. Michele et Luca se sont endormis. C'est encore John qui conduit ; nous n'avons assuré qu'un conducteur. Je le surveille d'un oeil, et je vois que je ne suis pas la seule : Thierry lui dit de ne pas hésiter à faire une pause. Il n'en fera pas à nous ramènera à bon port un peu avant quinze heures.",
					"",
					"Je range mes affaires tout de suite avant de ne plus avoir le courage. Et je mange ; j'ai l'impression que je ne peux pas m'arrêter. Comme si l'expression 'reprendre des couleurs' s'appliquait en direct et que chaque bouchée réchauffait mon visage. Il faudrait que je travaille un peu mais n'en ai pas le courage : A la place ce sera 'A trois on y va', 'Respire' et 'Les adoptés'. Un film un peu étranges puis deux beaux films de Mélanie Laurent. Je vous engage à les voir, en particulier 'Respire'."
				],
				images: [
					{
						image: "img/021/day021_01.jpg",
						legend: "C'est parti !",
					},
					{
						image: "img/021/day021_02.jpg",
						legend: "Luca et Johannes (appelé parfois John ou Meschi).",
					},
					{
						image: "img/021/day021_03.JPG",
						legend: "On commence à voir l'autre côté de la vallée.",
					},
					{
						image: "img/021/day021_04.JPG",
						legend: "Des bruits de cloche...ah, les voilà ! Mais ils prendront peur et on ne les verra que de loin.",
					},
					{
						image: "img/021/day021_05.JPG",
						legend: "Arrivés à la cabine !",
					},
					{
						image: "img/021/day021_06.JPG",
						legend: "L'autre bâtiment, c'est le sauna.",
					},
					{
						image: "img/021/day021_07.JPG",
						legend: "La rivière qu'on longe depuis le début passe là, juste en bas.",
					},
					{
						image: "img/021/day021_08.JPG",
						legend: "Pour l'instant sur les pierres, on sera plus tard dans l'eau !",
					},
					{
						image: "img/021/day021_09.JPG",
						legend: "Apaisant non ?",
					},
					{
						image: "img/021/day021_10.JPG",
						legend: "De l'autre côté...",
					},
					{
						image: "img/021/day021_11.jpg",
						legend: "C'est l'occasion de crapahuter.",
					},
					{
						image: "img/021/day021_12.jpg",
						legend: "Michele",
					},
					{
						image: "img/021/day021_13.jpg",
						legend: "Luca",
					},
					{
						image: "img/021/day021_14.JPG",
						legend: "Pascal",
					},
					{
						image: "img/021/day021_15.JPG",
						legend: "En route pour le lac !",
					},
					{
						image: "img/021/day021_16.JPG",
						legend: "Mi-aride, mi vert.",
					},
					{
						image: "img/021/day021_17.jpg",
						legend: "Merci le grand angle de l'iPhone de Pascal !",
					},
					{
						image: "img/021/day021_18.JPG",
						legend: "Thierry",
					},
					{
						image: "img/021/day021_19.jpg",
						legend: "Waouh.",
					},
					{
						image: "img/021/day021_20.JPG",
						legend: "Ca ne se voit pas sur la photo, mais le sol sur lequel on se tient est très humide, presque marécageux.",
					},
					{
						image: "img/021/day021_21.JPG",
						legend: "On a traversé pour aller voir de l'autre côté, et l'eau y est aussi.",
					},
					{
						image: "img/021/day021_22.JPG",
						legend: "Il faut être un peu fous pour se baigner dans une eau si froide...mais on l'est, donc tout va bien.",
					},
					{
						image: "img/021/day021_23.JPG",
						legend: "Mieux vaut s'asseoir, ça glisse beaucoup ; Pascal est tombé peu après cette photo.",
					},
					{
						image: "img/021/day021_24.JPG",
						legend: "Pause post-baignade et concours de ricochets.",
					},
					{
						image: "img/021/day021_25.JPG",
						legend: "Mmmmmh des chamallows grillés !",
					},
					{
						image: "img/021/day021_26.JPG",
						legend: "Un morceau de bois enflamé et une pause de trente secondes ; vers l'infini.",
					},
					{
						image: "img/021/day021_27.JPG",
						legend: "A quoi sert une lampe frontale si ce n'est à ça ?",
					},
					{
						image: "img/021/day021_28.JPG",
						legend: "Jeu de carte et guitare à la lumière des bougies.",
					},
					{
						image: "img/021/day021_29.JPG",
						legend: "Ca y est, on prend déjà le chemin du retour, sous la pluie.",
					},
					{
						image: "img/021/day021_30.JPG",
						legend: "On aperçoit la civilisation !",
					},
					{
						image: "img/021/day021_31.JPG",
						legend: "Des petites maisons près de l'endroit où on a garé la voiture.",
					},
					{
						image: "img/021/day021_32.JPG",
						legend: "Même style que la cabine !",
					}
				]
			},
			{
				id: "22",
				title: "Vers une semaine normale ?",
				date: "12, 13, 14, 15 septembre",
				html: [
					"Le réveil sonne à sept heures. Puis à sept heures dix. Puis encore, et encore. Je tend le bras pour l'arrêter. Il est sept heures quarante-trois.",
					"Le sujet de ce matin est mal rédigé ; tout le monde comprend des choses différentes et on reste plantés sans savoir quoi faire. Heureusement cela se révèle plus simple que prévu et on termine à midi. Cela me permet de rentrer et de faire les courses, puis de me mettre à travailler. Pour de bon cette fois. J'ai pas mal avancé, je me permets donc d'arrêter après manger pour écrire les derniers événements, enfin !",
					"Mercredi sera une journée très studieuse ; je travaille du matin au soir pour finir un devoir à rendre le jour-même, puis je regarde des vidéos de cours pour vendredi. Le film du soir est 'Bird people', et c'est très bizarre !",
					"Jeudi matin, il faut se lever à six heures pour se rendre au commissariat où à lieu l'enregistrement des élèves internationaux. Plus on arrive tôt, et moins on aura à attendre. On arrive à sept heures et demie, soit une heure avant l'ouverture, et il y a déjà du monde. On repartira avec le papier deux heures après, quand même. On retourne à Lade avec Antoine ; cette fois j'achète un petit duvet, ce sera bien plus pratique. Et des lunch boxes aussi, ça reviendra moins cher que la cafétéria. Le cours de l'après-midi ne nous apprendra rien, on sait lire un sujet d'exercice tout seul, merci. Je mange à dix-heures, à la nordique, pour pouvoir partir au hip-hop tranquillement. Je paye mon abonnement de danse pour le semestre et je m'éclate ; ça me fait vraiment du bien.",
					"Aujourd'hui la famille de Pascal est venue, son frère va rester ici cette nuit. Je décide de sortir avec les autres plutôt que d'aller au cours de salsa. On loupe un bus, on prend le suivant ; les gens sont un peu fous dedans. On entre dans la boîte où la bière est la moins chère, le 'Wildside'. Les autres veulent changer et aller au 'Downtown', ce qu'on fait. Peu après notre arrivée, quelqu'un s'approche pour me parler. Je n'entends absolument rien de ce qu'il dit et essaye de comprendre tout en réalisant que c'est un vigile. Il me fait signe d'aller dans une direction, j'y vais. Il m'emmène dans un cour intérieure ; je commence à me demander quel est ce guet-appant. Il m'explique que j'ai trop bu et qu'il va metrte un trait sur le tampon qu'on m'a mis sur le bras à l'entrée pour signifier que je dois aller 'marcher une demi-heure'. Bien que je sois dans un état tout à fait normal, je ne cherche pas à négocier et sors. Ma façon un peu folle de danser a dû le tromper ! J'envoie un message aux autres pour leur expliquer, et vais prendre des photos du port, puisque je suis dehors. Je reçois un message de Pascal qui lui s'est fait sortir pour avoir essayé de me défendre ; il a une croix et non un trait sur son bras, c'est donc définitif. Les autres nous rejoignent dehors. On essaye de retourner au Wildside, mais la croix vaut pour tous les clubs, Pascal ne peut plus entrer. On en essaye un dernier mais cette fois c'est son frère qui sera recalé pour avoir confondu sa carte d'identité et celle de Pascal. Décidément, ils sont stricts... Nous rentrons en taxi après cette soirée étrange. Je me prends à ne même pas être énervée ou déçue ; les choses sont ce qu'elles sont, et on en rira déjà demain."
				],
				images: [
					{
						image: "img/022/day022_01.jpg",
						legend: "Le fameux rayon dont je vous parlais. Il me reste celui en haut à droite à tester, mais ça a l'air d'être à peu près le même principe. On pourrait les classer : pâte feuilletée ou pain, canelle ou non, crème patissière ou non.",
					},
					{
						image: "img/022/day022_02.jpg",
						legend: "Décidement, ils aiment bien les trucs en vrac ! Ce n'est pas toujours très hygiénique (bonles surgelés ça va), mais j'aime bien le concept.",
					},
					{
						image: "img/022/day022_03.jpg",
						legend: "Des bonbons, et dans le fond, des noix. Salées, à mon grand désespoir.",
					},
					{
						image: "img/022/day022_04.jpg",
						legend: "La face cachée de l'iceberg. Et il y a un rayon entier de bonbons et autres sucreries en sachets derrière. C'est fou d'avoir un rayon sucreries aussi important dans une si petite surface.",
					},
					{
						image: "img/022/day022_05.jpg",
						legend: "Expérience culinaire n°34 : Pâtes saumon-épinards. Simple et très très très très bon.",
					},
					{
						image: "img/022/day022_06.jpg",
						legend: "Ca avance...",
					},
					{
						image: "img/022/day022_07.jpg",
						legend: "Parce que même quand on fait de l'informatique, ça aide d'utiliser un papier et un crayon ! (Oui oui il y a probablement des erreurs)"
					},
					{
						image: "img/022/day022_08.jpg",
						legend: "Sept heures et demie.",
					},
					{
						image: "img/022/day022_09.jpg",
						legend: "Ceci est une révolution. Nous l'avons appelé iCoquetier. Biodégradable et fourni avec la boîte d'oeufs.",
					},
					{
						image: "img/022/day022_10.jpg",
						legend: "Expérience culinaire n°35 : De la morue !",
					},
					{
						image: "img/022/day022_11.jpg",
						legend: "Expérience culinaire n°36 : Ecrasé de pomme de terre à la morue et sa crème fraîche (il s'en est fallu de peu, mais on n'a pas obtenu l'appelation de brandade).",
					},
					{
						image: "img/022/day022_12.jpg",
						legend: "Un train passe en arrière-plan.",
					},
					{
						image: "img/022/day022_13.jpg",
						legend: "Le port by night, encore.",
					}
				]
			},
			{
				id: "23",
				title: "Party post-party",
				date: "16, 17, 18 septembre",
				html: [
					"Déjà vendredi, la semaine est vite passée ! Ca commence par une séance d'exercices en conception d'ordinateur que je n'arrive pas à faire ; je suis paumée. Ca continue par un sandwich très cher parce que je n'ai pas de pause repas et rien préparé. Il est bon, donc j'oublie l'incident. Ca se poursuit par un atelier de sécurité informatique catastrophique, durant lequel je n'arrive même pas à installer le nécessaire pour travailler à cause d'un malentendu entre le prof et nous. Enervée, je décide de m'en aller au bout de deux heures ; j'ai un autres cours, il me sera sans doute plus utile. Je prends quand même le temps de faire une pause goûter pour compléter mon repas. La part de gâteau me paraît là encore bien chère mais en fait il y a la chantilly et le thé avec. Je rencontre un de mes voisins, il est allemand mais parle aussi français, la discussion est donc un mélange de français et de quelques termes anglais quand ils sont plus parlant que leurs équivalents. Ouf, ça fait du bien d'avoir une conversation sympa, surtout quand on passe une journée nulle ! Mais il faut déjà y retourner, un peu plus calme. Le prof explique le sujet des deux prochains devoirs à rendre, mercredi prochain et le suivant. C'est hyper intéressant mais ça a l'air compliqué, il ne faudra pas que je tarde à m'y pencher. Le cours finit avec un peu d'avance mais je n'ai pas tellement le temps de souffler : je dois retourner à Moholt me préparer pour la soirée.",
					"Un trajet en bus plus tard, je prépare mes affaires. Affaires de piscine pour le jacuzzi ? Ca supposerait une douche après, donc des affaires de rechange et une perte de temps sur une courte soirée, et des affaires mouillées dans le sac...je ferai sans. Chaussures de randonnée ? Il n'y a qu'une plage horaire d'une heure pour ça, les baskets suffiront, ne multiplions pas les paires de chaussures, il en faut déjà pour l'intérieur. Sac de randonnée ou sac à dos et duvet à la main ? Le sac de rando est vraiment gros, mieux vaut l'autre solution. Et maintenant, je m'habille comment ? J'emporte mon appareil photo sachant que je devrai le laisser sans surveillance ? Bref, vous l'aurez compris, préparer des affaires, même pour une soirée, pour moi, c'est compliqué.",
					"Un autre trajet en bus plus tard (mais dans l'autre sens, si j'avais trouvé une faille spatio-temporelle pour le prendre dans le même sens deux fois de suite, il ne fait aucun doute que je serais restée sur place...), me voilà de retour sur le campus. Certains ont opté pour les chaussures de rendonnée et le gros sac, d'autres ont fait comme moi, donc finalement il n'y avait pas de mauvais choix. Après ce passage en revue des autres, j'essaie d'identifier des têtes connues ou des personnes seules qui pourraient être des étudiants internationaux. Il y a cette fille à côté de moi mais elle a l'air très fermée.",
					"Vient l'heure de monter dans le bus. Un norvégien s'assoit à côté de moi et on commence à discuter, si bien que je ne vois pas trop le temps passer, on est vite arrivé. Descente du bus, récupération des affaires dans la soute, marche au milieu de la forêt et oh ! La cabine est là, immense comparée à la précédente. On entre et on se déchausse, comme à peu près partout ici. On monte à l'étage poser nos affaires sur un lit. Je regarde par la fenêter et ne peux retenir un 'ouaaah'. La vue est superbe.",
					"Il est temps de redescendre et de s'asseoir autour des grandes tables de la pièce principale. Le leader du club nous a donné des numéros dans le bus, il s'en sert maintenant pour former des groupes. Un concours de photos de groupe est organisé, et des suggestions de jeux pour apprendre à nous connaître nous sont proposées. Après un tour des prénoms et danses pratiquées, notre groupe décide de profiter de la lumière du jour pour jouer au 'Hi, ha, ho' dehors et prendre des photos. On passe un bon moment. Viens ensuite un temps mort ou chacun fait ce qu'il a envie : certains testent le jacuzzi, d'autres continuent à jouer ensemble ou discutent autour d'une bière. J'enfile mes baskets et décide d'aller faire un tour et de prendre quelques photos dans la lumière du soleil couchant. Il y a un chemin qui descend dans la forêt. Vu le temps imparti, je ne peux pas aller bien loin, mais cela me ferait plaisir de revenir prochainement.",
					"Je rentre me changer. J'ai prévu une robe finalement, et là encore j'ai visé juste : pas mal d'autres filles en ont. C'est très hétéroclyte malgré tout : certains sont extrêmement habillés, d'autres comme dans la vie de tous les jours. Je croise un français que j'ai rencontré au cours de salsa, on s'assoit à table et on discute ; c'est sympa. La photo gagnante est annoncée. Ce n'est pas notre groupe mais la leur est géniale, c'est mérité. Le chef annonce le repas. Quand il dit 'txo-course meal' je comprends deux plats et un dessert, parce que pour moi le dessert est sous-entendu. Mais en fait non, c'est le deuxième plat. Ca a l'air d'être assez inhabituel de prendre un dessert ici, déjà lors de la promotion de l'événement c'était un argument phare. Ce sera de l'agneau, suivi d'une mousse au chocolat. Aux deux annonces, gloussements dans l'assistance, comme si c'était absolument exceptionnel. Il faut dire que la viande est chère ici. Quant au chocolat, on nous en a distribué par deux fois depuis le début du semestre comme si c'était incroyable, et là encore il apparaît comme un produit de luxe. On ne mesure pas la chance qu'on a en France.",
					"Le plat principal est bon : viande, sauce, légumes, petites pommes de terre ; c'est assez typique je pense. J'aide à débarasser, je vais aider à laver la vaiselle pour être remboursée d'une partie de mon inscription. La mousse au chocolat est servie sur des baies ; là encore c'est très typique, il y en a plein les magasins. Ca donne un ensemble équilibré, je note l'idée. A la fin du repas, des chants sont entonnés en guise de remerciements aux organisateurs. Ca me rappelle le ban bourguignon, et dans le contexte, ça rend super bien. J'aide à ramener les ramequins puis écoute le chef nous expliquer comment nettoyer cette vaisselle de cent cinquante personne. Nous sommes quatre, mais ça va assez vite. En récompense (en plus du futur remboursement), nous avons droit à une mousse au chocolat supplémentaire. Et l'impression de l'avoir méritée la rend meilleure, j'en profite plus que la première. Il reste du mélange de baies, on en mange même sans chocolat. Le chef nous explique qu'il a simplement mélangé des groseilles, des myrtilles et des mûres avec du sucre pour les faire dégorger. Top !",
					"En retournant dans la salle, nous pensions trouver tout le monde en train de danser. Que nenni ! Ils sont encore tous assis à table. La musique est plutôt salsa, quelques couples dansent mais c'est tout. Après plusieurs aller-retour près des DJ pour choisir des chansons en espérant qu'elles fassent bouger tout le monde, la soirée démarre. C'est différent de passer une soirée avec des gens qui aiment danser. On voit bien chez chacun le style prédominant et les musiques appréciées ; mais globalement tout le monde danse sur tout à sa manière et c'est vraiment agréable. Je rencontre des gens, je discute, je danse, je regarde Trondheim de nuit au loin.",
					"A un moment, c'est l'heure du snack. Et ce sont des hot-dogs, parce qu'ici, ils adorent les pizzas et les hot-dogs. J'en mange deux et je dois dire qu'après autant de danse, c'est super bon ! Je danse encore un peu puis je commence à ranger. J'ai décidé de ne pas dormir ici finalement, donc il faut que je finisse la vaisselle de ce qui reste avant que le bus arrive. Ceux qui restent me disent que je vais louper les pancakes, dommage. Mais rester pour dormir et repartir le lendemain à onze heures me paraît une grosse perte de temps ; si je dors chez moi je pourrai me lever plus tôt et avancer dans mes devoirs de la semaine prochaine.",
					"Je récupère mes affaires et on quitte Studenterhytta dans la nuit. Le bus fait plusieurs arrêts avant d'arriver à Moholt ; c'est super qu'il ne nous ait pas laissés en centre-ville en pleine nuit. Je me couche, demain sera un journée plus studieuse !",
					"",
					"Enfin, la journée studieuse, c'était sans compter un nouveau stop de mon corps, qui ne me réveillera que vers quatorze heures, et fera de mon week-end un long moment de questionnement et d'inquiétudes, accompagné bien évidemment de l'incapacité de travailler et d'aucune envie de faire quoi que ce soit. La semaine prochaine sera un autre semaine ?"
				],
				images: [
					{
						image: "img/023/day023_01.jpg",
						legend: "Trois kilomètres à pied, ça...non je plaisante, deux cents mètres.",
					},
					{
						image: "img/023/day023_02.jpg",
						legend: "Studenterhytta !",
					},
					{
						image: "img/023/day023_03.jpg",
						legend: "Vous vous rappelez quand je vous ai dit que j'ai lâché un 'ouaaah' en regardant par la fenêtre ?",
					},
					{
						image: "img/023/day023_04.jpg",
						legend: "Il y a même des bancs pour regarder, c'est bien pensé ici.",
					},
					{
						image: "img/023/day023_05.JPG",
						legend: "Première photo de la série destinée au concours !",
					},
					{
						image: "img/023/day023_06.JPG",
						legend: "Et encore.",
					},
					{
						image: "img/023/day023_07.JPG",
						legend: "On joue avec le soleil.",
					},
					{
						image: "img/023/day023_08.JPG",
						legend: "A plusieurs reprises.",
					},
					{
						image: "img/023/day023_09.JPG",
						legend: "Avec de l'imagination, c'est un coeur non ?",
					},
					{
						image: "img/023/day023_10.jpg",
						legend: "Les gagnants ont symbolisé la danse et représenté les lettres NTNUI D pour NTNUI Dans, le club de danse au sein de l'association sportive de l'université !",
					},
					{
						image: "img/023/day023_11.jpg",
						legend: "Le drapeau NTNUI flotte là-haut.",
					},
					{
						image: "img/023/day023_12.jpg",
						legend: "Après quelques mètres on est en plein forêt",
					},
					{
						image: "img/023/day023_13.jpg",
						legend: "Ce chemin qui semble s'enfoncer dans la forêt sans fin...",
					},
					{
						image: "img/023/day023_14.jpg",
						legend: "Le soleil fait tomber l'automne.",
					},
					{
						image: "img/023/day023_15.jpg",
						legend: "Pas de doute, la lumière baisse !",
					},
					{
						image: "img/023/day023_16.jpg",
						legend: "J'ai remarqué ce bâtiment sphérique. Je me rendrait compte plus tard qu'il est visible du campus, ce qui me permettra de situer Studenterhytta par rapport à Trondheim.",
					},
					{
						image: "img/023/day023_17.jpg",
						legend: "Toute cabine a son feu de camp.",
					},
					{
						image: "img/023/day023_18.jpg",
						legend: "Encore un peu de la vue.",
					},
					{
						image: "img/023/day023_19.jpg",
						legend: "On voit loin !",
					},
					{
						image: "img/023/day023_20.jpg",
						legend: "Remarquerez-vous le lac en arrière-plan ?",
					},
					{
						image: "img/023/day023_21.jpg",
						legend: "La ville scintille au loin. Partout ailleurs c'est la nuit noire.",
					},
					{
						image: "img/023/day023_22.jpg",
						legend: "Après le repas, chacun discute dans la grande salle. La cabine est décorée avec des objets vikings et des têtes d'animaux empaillées.",
					},
					{
						image: "img/023/day023_23.jpg",
						legend: "La Lune a bougé vite !",
					},
					{
						image: "img/023/day023_24.jpg",
						legend: "Le fameux hot-dog avec des oignons frits. C'est une saucisse d'agneau en fait ! Mais il y en a aussi au porc.",
					}
				]
			},
			{
				id: "24",
				title: "Semaine studieuse...",
				date: "19, 20, 21 septembre",
				html: [
					"Le TP de lundi est un enfer, rien ne marche et même les encadrants ne comprennent pas pourquoi. On voit les autres binômes avancer tout en étant bloqué, alors on parle de l'avenir avec Antoine. Puis nous prenons la place des autres, qui ont terminé, pour finalement finir et faire valider notre travail. Nous rentrons manger, je fais les courses et nous nous retrouvons dans l'après-midi pour travailler ensemble. Je termine la plus grosse partie d'un devoir, ouf !",
					"Le TP de mardi est comme toujours éprouvant. Je code, Marjolaine tente d'améliorer notre breadbord. On fait une pause repas, je mange le contenu de ma lunch box et m'offre un pancake au brunost, top ! On retourne en labo, on a le même problème pendant longtemps. Je m'échappe pour honorer mon rendez-vous avec mon groupe dans un autre cours. On se met d'accord sur comment on va fonctionner, mais on ne peut pas travailler vraiment ensemble, ce sera plutôt chacun de son côté.",
					"Je retourne dans la salle de TP et trouve comment régler une partie du problème avec des indications de Marjolaine. Comme quoi être deux et prendre l'air en faisant autre chose aide à avancer. Le soir je suis fatiguée mais je décide d'aller au West Coast Swing pour décompresser. Pari gagné : même si j'ai loupé quelques cours, les reminiscences des cours en France me permettent de suivre le cours parfaitement et je suis donc à l'aise pour discuter avec les gens que je rencontre. Je rentre à pied car le prochain bus est dans trop longtemps, et je fais un Skype avec mes potes de Cergy. Ca me fait vraiment plaisir de parler avec eux. J'ai confirmation des nouvelles que j'ai entendues à propos de l'ENSEA. Et je me couche, épuisée.",
					"Mercredi commence bien, sous la douche déjà je suis pleine de motivation. Je prends le temps de prendre un vrai petit-déjeuner complet. Je m'aprête à travailler quand l'alarme incendie retentit. Nous sortons, puis un gars vient nous prévenir qu'il a oublié un toast chez lui mais qu'on peut rentrer sans crainte. Effectivement la cage d'escalier est enfumée mais on rentre. Les alarmes sonnent dans nos chambres ; on ferme toutes les portes et on attend dans la cuisine. Une fois l'alarme arrêtée, je finis par me mettre à travailler. Je finis le devoir en fin d'après-midi, quelques heures avant la deadline. Et d'un ! Plus qu'à peaufiner celui que j'ai bien entamé lundi d'ici vendredi, et commencer celui dont la réunion de groupe de mardi était l'objet et le finir d'ici dimanche. Quel boulot !",
					"Je trouve le courage d'aller à la danse contemporaine. Ca va me faire du bien après une journée à travailler. Je pense avoir du mal à suivre car j'ai loupé deux cours, mais en fait je m'en sors très bien. Bien que tout se déroule en norvégien, j'entends mon nom, comprends quand on me demande si j'ai une carte de danse, réussis à suivre le cours sans problème et comprends que le thème de la danse pour le show de fin de semestre est le bus, et que la partie que nous avons commencé à répéter est l'attente. Je suis assez fière de moi (fait notable !) et je rentre manger et remettre mon blog à jour. Mes colocs allemands partent aux Lofoten. Je suis jalouse, mais d'évidence les devoirs que j'ai à rendre ne me permettaient pas d'y aller cette semaine. Bientôt j'espère."
				],
				images: [
					{
						image: "img/024/day024_01.jpg",
						legend: "Juste pour le fun : vous pouvez enchaîner les trois photos très vite !",
					},
					{
						image: "img/024/day024_02.jpg",
						legend: "",
					},
					{
						image: "img/024/day024_03.jpg",
						legend: "",
					},
					{
						image: "img/024/day024_04.jpg",
						legend: "Expérience culinaire n°37 : Ca a plus la consistance de beurre que le précédent, c'est salé, mais c'est quand même mi-crème mi-margarine végétale.",
					},
					{
						image: "img/024/day024_05.jpg",
						legend: "Expérience culinaire n°38 : Pour une cuisson convaincante des brocolis, il faudra repasser. Quant aux galettes de pomme de terre à la morue...c'était pas trop ça non plus.",
					},
					{
						image: "img/024/day024_06.jpg",
						legend: "Expérience culinaire n°39 : Les crevettes panées surgelées que j'avais acheté il y a un moment. Je valide.",
					},
					{
						image: "img/024/day024_07.jpg",
						legend: "Expérience culinaire n°40 : Le fiskpudding ! Mais euh, ça se prépare comment au juste ?",
					},
					{
						image: "img/024/day024_08.jpg",
						legend: "Ah, en fait il faut faire revenir des tranches à la poêle. C'est bon mais il n'y a pas de grande différence avec les autres plats à base de poisson que j'ai pu tester.",
					},
					{
						image: "img/024/day024_09.jpg",
						legend: "Youhou du fromage français !!! C'est cher mais ça me manquait. Je mangerais bien un morceau de baguette croustillante sortant du four avec, mais c'est hauement improbable.",
					},
					{
						image: "img/024/day024_10.jpg",
						legend: "Ca se précise...et c'est de plus en plus le bazar (pour l'instant !).",
					},
					{
						image: "img/024/day024_11.jpg",
						legend: "Expérience culinaire n°40 : Onion rings, japanelo peppers et mozarella sticks, plus sauce aigre-douce. Sympa.",
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
