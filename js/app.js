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
			},
			{
				id: "25",
				title: "Again and again",
				date: "22, 23, 24, 25, 26 septembre",
				html: [
					"Au programme de ce jeudi, encore...la même chose ! Et oui en effet il faut travailler de nouveau car j'ai un devoir à rendre pour vendredi. Après une retouche au code vient l'heure du fatidique test sur FPGA (novices s'abstenir), qui par chance se révèlera concluant dans mon cas. Après avoir correctement préparé les livrables, je poste le tout en ligne, m'offrant le luxe d'une journée d'avance. Cela me permet d'aller au hip-hop sereinement...où on nous annonce que notre présence sera contrôlée pour vérifier que nous serons aptes à participer au spectacle de fin de semestre. Ou comment recréer du stress après son évacuation, le tout dans une activité initialement de loisir. Bref. Je compte rentrer pour manger et repartir à la salsa mais le bus sera tellement long que ça ne se fera pas. Je me contente d'aller dormir.",
					"Vendredi ! C'est le moment d'attaquer le devoir pour mercredi prochain ! Puis de faire quelques choses et d'autres avant de se diriger vers la soirée West Coast Swing destinée à faire connaissance avec les autres danseurs. Encore une soirée qu'on nous a vendue à coup de chocolat. Le studio ne paye pas de mine de l'extérieur, mais à l'intérieur ce sont plusieurs parquets qui s'offrent aux danseurs. Nous attaquons par un cours dans la pièce principale avant d'être répartis par équipe pour des jeux plus stupides les uns que les autres ; des rires en perspective. Notre équipe fait carton plein. Puis la soirée se poursuit entre danses, discussions, chips et chocolat. Je trouve du monde qui retourne à Moholt en bus, et il est près de deux heures du matin quand je m'allonge enfin.",
					"J'ouvre les yeux à neuf heures. Je me dis qu'il est trop tôt pour quelqu'un qui s'est couchée à deux heures et une journée de week-end. Je me rendors. Quand je me réveille la seconde fois, il est seize heures. Qui n'a plus de médicament ? Cette journée sera incroyablement vide du fait de sa courte durée, deux repas, un peu de travail et un film feront l'affaire.",
					"Pas grand chose de spécial en ce dimanche matin. L'après-midi je vais à l'université pour le devoir de groupe pour le jour-même. Oui oui, à l'université un dimanche après-midi. Ensuite je rejoins Marjolaine et Lucile au gymnase pour une séance de step. Je n'en avais jamais fait et je réalise que ça demande une concentration et une énergie assez innatendues. Mais c'est sympa. Je passe un peu de temps en ligne pour reformuler le document à rendre ce soir. Je suis un peu dégoûtée d'apprendre que d'autres ont bougé ce week-end et que personne n'a jugé utile de me prévenir. De même pour la magnifique aurore boréale que je loupe en ce dimanche soir. Allez, la semaine prochaine sera peut-être meilleure...",
					"Et effectivement, je reprends espoir ce lundi en remarquant que les deux semaines à venir pourraient être suffisamment légères pour que je parte en excursion, et que les prix pour les Lofoten semblent raisonnables. Bien sûr, ça signifiera de travailler avec acharnement et dans l'urgence, mais ça vaut le coup... Je lance les autres sur le sujet pour voir un peu qui serait partant. Pour finir de me rebooster, je fais une soirée crêpes, et mes colocs m'annoncent que la probabilité de voir une aurore boréale est encore élevée cette semaine. Les galères de TP de ce matin sont déjà oubliées. celles de demain sont encore loin. Et effectivement, plus tard dans la soirée, nous regardons le ciel, et nous n'avons d'autre solution que de sortir voir. Apparemment celle qu'on a loupée hier était plus impressionnante, mais c'est déjà un beau spectacle. Et puis c'est la première."
				],
				images: [
					{
						image: "img/025/day025_01.jpg",
						legend: "Jeudi matin, brunch !",
					},
					{
						image: "img/025/day025_02.jpg",
						legend: "La grande salle du studio de danse. Il y en a plusieurs autres. Les chaussures d'intérieur sont requises pour ne pas abîmer le parquet, comme dans toutes les salles du gymnase où je danse habituellement.",
					},
					{
						image: "img/025/day025_03.jpg",
						legend: "Une fois les lumières éteintes, les danseurs s'en donnent à coeur jooie.",
					},
					{
						image: "img/025/day025_04.jpg",
						legend: "Ambiance cosy avec les bougies !",
					},
					{
						image: "img/025/day025_05.jpg",
						legend: "Les couleurs de l'automne...mais le soleil !",
					},
					{
						image: "img/025/day025_06.jpg",
						legend: "Expérience culinaire n°41 : Crêpe saumon épinards crème fraîche ! Top !",
					},
					{
						image: "img/025/day025_07.jpg",
						legend: "Expérience culinaire n°42 : Le Nutella étant horriblement cher et pas franchement local, j'ai testé autre chose. Et puis ce serait un peu offensant de manger du Nutella dans un pays 'sans huile de palme', 'sans conservateur', 'sans gluten', 'sans lactose' et j'en passe !",
					},
					{
						image: "img/025/day025_08.jpg",
						legend: "Avec un long temps de pause, on voit l'aurore (et la grande Ourse en cadeau). Malheureusement cela ne reflète la vitesse à laquelle cela se déplace.",
					},
					{
						image: "img/025/day025_09.jpg",
						legend: "C'est quand même dingue de se dire que ça a lieu chez soi.",
					}
				]
			},
			{
				id: "26",
				title: "An-ti-ci-per !",
				date: "27, 28, 29, 30 septembre",
				html: [
					"Le mardi est égal à lui-même. Le soir, j'essaie de finir le devoir avec lequel je lutte, sans succès. Je finis par abandonner au profit de quelques épisodes de séries.",
					"Mercredi, je décide de tout reprendre à zéro. C'est ma dernière chance, ce devoir représente 10% de la note finale de ce cours quand même ! Le recommencement portera ses fruits puisque je réussis le devoir sans problème en quelques heures et qu'il me reste même du temps pour faire la partie optionnelle. Je peux donc aller à la danse sereinement et passer le reste de la soirée à planifier le voyage aux Lofoten avec Maxime et Antoine. Ca se concrétise enfin...ouf !",
					"Jeudi, je vais en cours, mais cela se révèle franchement ennuyeux. Je pensais rester chez moi pour avancer mon travail mais les autres réussissent à me convaincre de sortir. Après un tour dans un immeuble bondé qui fait office de 'pre-party' mais où il y a trop de monde pour que ce soit agréable, nous partons prendre le bus. Nous perdons une partie du groupe. Nous allons d'abord dans un bar sympa, puis dans un club que je ne connaissais pas encore, le Mint. Il y a une norvégienne avec nous, et elle est dans un état assez lamentable. Mais elle est joyeuse donc c'est drôle. Elle emmène John dans un groupe de filles et moi dans un groupe de gars, mais ce n'est concluant ni pour lui ni pour moi. On décide d'aller dans un endroit moins vide et où la musique est plus intéressante. J'entre au Downtown mais ne voit pas les autres arriver. Je me retrouve toute seule et trouve finalement le reste du groupe, qu'on avait perdu dès le début. Il sera impossible une nouvelle fois de retrouver tout le monde, mais on rentre en taxi sans encombres.",
					"Vendredi, un jour post-soirée sans grand intérêt si ce n'est celui de se reposer. De fait, j'ai du mal à m'endormir le soir. Et voilà, septembre est déjà terminé."
				],
				images: [
					{
						image: "img/026/day026_01.jpg",
						legend: "Expérience culinaire n°43 : Quand tu crois acheter des myrtilles mais qu'en fait c'est de la confiture. Et que maintenant tu as en ta possession un kilo de confiture.",
					},
					{
						image: "img/026/day026_02.jpg",
						legend: "La breadbord, le retour !",
					},
					{
						image: "img/026/day026_03.jpg",
						legend: "En fin de séance, on en a marre et on se prend pour des artistes du binaire.",
					},
					{
						image: "img/026/day026_04.jpg",
						legend: "Expérience culinaire n°44 : Le steak haché spécial hamburger qui fait 180 grammes. Si si.",
					},
					{
						image: "img/026/day026_05.jpg",
						legend: "Expérience culinaire n°45 : Saviez-vous que le yaourt nature en grande quantité revient plus cher au kilo que les aromatisés en portions individuelles ?",
					},
					{
						image: "img/026/day026_06.jpg",
						legend: "Expérience culinaire n°46 : La fameuse gaufre beurre-brunost. Il paraît que je suis dingue d'aimer ça.",
					}
				]
			},
			{
				id: "27",
				title: "Norwegian typical week-end",
				date: "1er, 2, 3 octobre",
				html: [
					"J'avais prévu d'aller faire un tour en ville ce samedi matin, mais il est un peu tard et j'ai beaucoup de travail. Travail que je n'arriverai pas à avancer beaucoup. Heureusement je finis quand même la correction de mon rapport de stage à temps pour la soirée ; ça me libère l'esprit.",
					"Après un calme début de soirée dans un appartement pas loin où les autres programment leur futur voyage, nous prenons le bus pour nous rendre en ville. Il n'y a pas grand monde devant le Café 3B où a lieu la soirée ; nous entrons facilement. Nous pensions qu'un tel événement, prévu pour tous les étudiants internationaux, aurait lieu dans une grande boîte de nuit. A la place, c'est dans un bar bondé, où les places assises prennent trop de place compte tenu du nombre de personnes, où la bière est chère et où la musique est presque inaudible, que nous entrons. Après un moment passé à croiser des têtes connues et à discuter, l'atmosphère devient étouffante. J'arrive à trouver une place assise et me sens un peu mieux, mais à la première occasion je propose aux autres de sortir pour trouver un autre endroit. Après une courte bataille avec le portant et les cintres pour retrouver nos vêtements, nous nous extirpons hors du bar.",
					"C'est la folie dehors. Une queue d'une longueur ahurissante patiente pour entrer. Alors que ça ne vaut pas vraiment la peine. Nous marchons jusqu'au Circus, mais là aussi il y a une file d'attente monstrueuse. Même chose au Downtown. Nous n'avons pas le courage d'attendre dans le froid et décidons d'entrer au Wildside, où étrangement il n'y a personne. L'entrée est payante le samedi mais inclut le vestiaire, ce qui semble raisonnable. Nous comprenons vitequ'il n'y a personne non plus à l'intérieur. On s'ennuie un moment avant que le monde commence à arriver et qu'il devienne possible de danser sans se sentir seuls. Les gens sont particulièrement brusques et nous prenons des coups de toutes parts. Un peu avant la fermeture nous sortons dans l'optique de rentrer. Il y a encore de longues files partout où les taxis prennent habituellement les clients. Une nouvelle fois nous refusons d'attendre et marchons en espérant en trouver un ailleurs. Et effectivement nous en croisons un qui nous prend tous les cinq au milieu de la route. Nous sommes serrés sur la banquette arrière et le chauffeur roule un peu n'importe comment. Heureusement il n'y a pas grand monde sur la route à cette heure et nous arrivons vite (trop vite ?) à Moholt. Je vais vite me coucher, pas convaincue que sortir le samedi soir soit la meilleure des idées.",
					"",
					"Mon réveil m'aide à sortir du lit vers dix heures. Il fait plutôt beau, ce qui est de bonne augure pour la randonnée. On s'occupe des réservations Airbnb avec Maxime, on se sentira mieux quand tout sera prêt. Le temps en profite pour tourner ; il pleut des trombes d'eau. Je commence à hésiter, après tout j'ai beaucoup de choses à faire... Mais miraculeusement un rayon de soleil perce vers midi. Je me prépare à toute vitesse pour être dans les temps. Je m'habille quand même pour la pluie, au cas où.",
					"En sortant de chez moi, j'ai la même sensation qu'au ski, quand on sent le froid qui nous attrape au visage mais qu'on est par aileurs très protégé. Je prends le bus et descend près du parc où est le point de rendez-vous ; j'espère trouver facilement. Je repère vite le groupe et me joins à eux. Un iranien que j'ai rencontré au cours de West Coast Swing est là et me présente un ami brésilien. Ma buddy est là aussi, mais on ne se parlera presque pas du parcours. La pluie a repris, espérons que ça cesse.",
					"Après quelques minutes d'attente, la pluie s'arrête, comme ne cessait de le prédire les norvégiens. Nous nous mettons en route, direction Geitfjellet ! Quelques minutes plus tard à peine, nous longeons déjà un cours d'eau ; on semble avoir juste quitté la ville et la nature est pourtant déjà là. Cela monte beaucoup ; je peine un peu et me retrouve vite à l'arrière du groupe. Mais je ne suis pas trop loin et les organisateurs sont indulgents ; ils savent bien qu'un événement ouvert à tous suppose d'attendre tout le monde. Et ils me rassurent en me disant que la première partie est la plus difficile.",
					"Nous nous retrouvons vite en pleine forêt. Nous avions été avertis que le chemin serait boueux, mais je ne pensais pas à ce point ! Au début il faut encore beaucoup monter, après ça va effectivement un peu mieux. Les guides s'arrêtent de temps en temps pour attendre tout le monde. A mi-parcours, il faut presque escalader des roches pour bénéficier de la vue. On fait une courte pause, juste le temps de boire un peu et de prendre quelques photos. Redescendus de ce promontoire, nous continuons notre route. Le terrain se fait plus humide encore. Cela m'importait peu au début puisque mes chaussures ne craignent pas l'eau, mais là les pieds s'enfoncent ; il faut apprendre vite à repérer les pierres, branches et racines pour s'appuyer. Les norvégiens sont très à l'aise pour ça ! D'ailleurs, nous croisons beaucoup de marcheurs, y compris des enfants et des personnes assez âgées, qui se promènent sur ce chemin loin d'être facile. Il y a même des coureurs !",
					"A un moment, nous arrivons face à une zone marécageuse. Je repère une branche sur laquelle je pense pouvoir traverser, mais il me faut faire un pas pour l'atteindre. Une fille derrière moi pousse un cri quand ma jambe gauche s'enfonce jusqu'au genou. Une norvégienne me dit de revenir, mais en faisant un pas en arrière c'est mon autre jambe qui se retrouve prise. Je ne panique pas une seconde, puisque c'est parfaitement inutile, et accepte leur aide pour m'extirper de là. Ah tiens, mes chaussures ne sont pas imperméables par au-dessus...et l'eau va rester à l'intérieur maintenant. Hormis cette frayeur, le reste du parcours se passe sans encombre. Des pontons en bois sont installés par endroit pour permettre la traversée des zones trop humides, indiquées par une végétation jaune et une absence d'arbres. Zones magnifiques par ailleurs. Il faut encore presque escalader pour arriver au sommet. Mais on est largement récomposé de ses efforts tant la vue est superbe. Nous en profitons, ainsi que du soleil, pendant un moment. Chacun se restaure avant que nous fassions une photo de groupe. Quand on commence à se refroidir, c'est qu'il est temps de repartir.",
					"La descente est beaucoup plus facile et sera faite d'une traite. Il faut juste est très prudent car tout glisse. Il fait aussi plus froid. La dernière partie descend beaucoup, cela la rend plus dangereuse mais cela me fait aussi réaiser que c'était vraiment le plus difficile à l'aller. On retrouve vite la ville et tout le monde se sépare. Je comptais prendre le bus pour rentrer me reposer au plus vite, mais les deux gars rencontrés au début proposent d'aller dans un café et cela me semble une bonne idée.",
					"Nous marchons jusqu'à Bakklandet, qui semble une nouvelle fois le lieu le plus adapté pour ça. C'est toujours un quartier aussi agréable. L'iranien connaît 'Antikvariatet', un café qu'il nous avait déjà été demandé de repérer lors du rallye de la première semaine. Le lieu est magnifique. Il y a des bouteilles, des verres, des affiches et des livres en décor partout. On va jusqu'une salle au fond qui a plus l'allure d'une bibliothèque que d'un café. Ce sont tous des livres anciens et uniques, dit un écriteau. Dans les différentes salles que nous avons traversées, il y a des instruments. Ici il y a un groupe qui répète, sans doute pour la soirée. Nous passons un moment vraiment sympathique tout en discutant.",
					"Nous sortons et attendons ensemble le bus, bien que je sois le seule à le prendre. Je rentre et me repose, mais il me faut sortir régulièrement de ma chambre pour vérifier qu'il n'y a pas d'aurore boréale, la probabilité est importante et le ciel est dégagé. Et effectivement, Johannes frappe à ma porte pour que je sorte regarder par la fenêtre de la cuisine. C'es très des différent de la dernière fois, ce ne sont pas une mais de nombreuses lignes vertes qui balayent le ciel à toute vitesse. Nous décidons de sortir. Cela s'est calmé, il n'y a plus que quelques bandes qui suggèrent que cela pourrait reprendre. Nous nous dirigeons vers le stade mais il est encore éclairé. Nous allons donc dans le parc à côté de la tour de Tyholt. Les éclairages de ville gênent la vue au niveau de l'horizon, mais au moins elle est dégagée au Nord. Malheureusement nous ne serons pas chanceux et devrons nous contenter d'observer le ciel sans Lune. Ce qui reste, comme toujours, époustouflant."
				],
				images: [
					{
						image: "img/027/day027_01.JPG",
						legend: "Au sommet, superbe vue sur Trondheim et son fjord.",
					},
					{
						image: "img/027/day027_02.JPG",
						legend: "N'oublions pas qu'on est séparés de la ville par la forêt.",
					},
					{
						image: "img/027/day027_03.JPG",
						legend: "L'autre côté du fjord.",
					},
					{
						image: "img/027/day027_04.JPG",
						legend: "Waouh.",
					},
					{
						image: "img/027/day027_05.JPG",
						legend: "Où suis-je ?",
					},
					{
						image: "img/027/day027_06.JPG",
						legend: "Là encore la forêt est dense.",
					},
					{
						image: "img/027/day027_07.JPG",
						legend: "Par endroits les arbres laissent place à ces plaines jaunes très humides...",
					},
					{
						image: "img/027/day027_08.JPG",
						legend: "...voire marécageuses.",
					},
					{
						image: "img/027/day027_09.JPG",
						legend: "On fait une pause pour admirer la vue.",
					},
					{
						image: "img/027/day027_10.JPG",
						legend: "Des barres énergétiques nous sont distribuées...on se sent bien mieux après, mais vu le prix en magasin, je n'en achèterai pas moi-même !",
					},
					{
						image: "img/027/day027_11.jpg",
						legend: "Photo de groupe !",
					},
					{
						image: "img/027/day027_12.jpg",
						legend: "Dans la joie et la bonne humeur !",
					},
					{
						image: "img/027/day027_13.JPG",
						legend: "On voit un autre village de l'autre côté de la montagne.",
					},
					{
						image: "img/027/day027_14.JPG",
						legend: "Encore de l'eau...",
					},
					{
						image: "img/027/day027_15.JPG",
						legend: "Encore Trondheim...",
					},
					{
						image: "img/027/day027_16.JPG",
						legend: "Et encore.",
					},
					{
						image: "img/027/day027_17.JPG",
						legend: "Et un arbre qui a cru pouvoir pousser sur la pierre.",
					},
					{
						image: "img/027/day027_18.JPG",
						legend: "C'est l'heure pour ce norvégien de rentrer chez lui !",
					},
					{
						image: "img/027/day027_19.JPG",
						legend: "Ca doit être sympa d'habiter là !",
					},
					{
						image: "img/027/day027_20.JPG",
						legend: "Ce ruisseau est quasiment dans la ville.",
					},
					{
						image: "img/027/day027_21.JPG",
						legend: "Idéal pour rincer les chaussures !",
					},
					{
						image: "img/027/day027_22.jpg",
						legend: "LE gâteau aux pommes. Avec de la canelle bien sûr, ici ça va de soi.",
					},
					{
						image: "img/027/day027_23.jpg",
						legend: "Ce café est un lieu atypique très agréable.",
					},
					{
						image: "img/027/day027_24.jpg",
						legend: "Je ne m'en lasse pas.",
					},
					{
						image: "img/027/day027_25.JPG",
						legend: "Pas d'aurores...mais les étoiles !",
					}
				]
			},
			{
				id: "28",
				title: "Juste avant de partir",
				date: "4, 5 octobre",
				html: [
					"Le réveil sonne à sept heures. Au moins bingt minutes après, il s'immisce dans mon rêve, qui pourtant refuse de finir. Une histoire loufoque de maîtrise de taureau et de communication en langage des signes entre mon coloc allemand et des élèves de l'ENSEA. Je finis par sortir du rêve, mais mes yeux refuse de s'ouvrir. Le reste de mon corps non plus ne veut pas bouger. Au prix d'un terrible effort, je cherche mon portable sur le sol en tatônnant avec mon bras. Je me force à ouvrir les yeux pour constater qu'il es t sept heures quarante. Il me faudra en quelques longues minutes pour que mon corps sorte de sa paralysie. Bonjour hypersomnie, tu as bien dormi ? Apparemment oui...",
					"Le TP d'aujourd'hui n'est pas trop difficile. Après manger, je me remets à mes devoirs et oh surprise, réussis une nouvelle fois en moins d'une heure ce sur quoi j'avais bloqué la fois précédente. La fin de l'après-midi me sera fatale en revanche : après que mon ordinateur ait cherché en vain le fichier 'sssssssssssssssss' (et encore, il y en avait bien plus) à cause de la touche sur laquelle je m'étais assoupie, je finis par m'endormir complètement. D'un sommeil profond qui ne me libèrera que deux heures plus tard. Heureusement que j'ai fini l'essentiel de mes préparatifs et que j'aurai encore un peu de temps demain ; c'est très énervant de perdre deux heures pour rien. Les aurores sont probables ce soir mais apparemment je ne verrais rien, je ne suis pas productive côté travail le soir... Autant rédiger les journées précédentes riches en activité !",
					"",
					"Mardi, c'est le jour du grand départ. La journée se déroule normalement et le TP se passe plutôt dans la bonne humeur. Nous aboutissons à une heure décente, ce qui me permet d'aller aider le groupe de Security Software pour notre devoir commun, puis de m'éclipser en ville recharger ma carte SIM en vue du voyage. A mon retour des amis de Pascal sont là, mais je risque de ne pas beaucoup les voir !"
				],
				images: [
					{
						image: "img/028/day028_01.jpg",
						legend: "Oui je sais, c'est inintéressant, mais il faisait tellement beau ce matin que j'avais envie d'immortaliser ce moment.",
					},
					{
						image: "img/028/day028_02.jpg",
						legend: "Expérience culinaire n°47 : C'est écrit 'la meilleure pizza au pepperoni de Norvège'. Ce n'est tellement pas le cas que j'ai dû ajouter du ketchup.",
					},
					{
						image: "img/028/day028_03.jpg",
						legend: "Expérience culinaire n°48 : Comment se fait-il que je n'ai pas découvert ce gâteau à l'amande avant ?",
					},
					{
						image: "img/028/day028_04.jpg",
						legend: "Expérience culinaire n°49 : Wienerbrød, le dernier de la série. Pour conclure, je préfère la pâte feuilletée à l'aspect beignet.",
					},
					{
						image: "img/028/day028_05.jpg",
						legend: "Expérience culinaire n°50 : Le retour de la canelle.",
					},
					{
						image: "img/028/day028_06.jpg",
						legend: "Expérience culinaire n°51 : Alpen, ah ah ah. Ces barres seront utiles pour notre excursion.",
					},
					{
						image: "img/028/day028_07.jpg",
						legend: "Oh allez, l'interface est jolie, vous oublierez bien les spaghetti !",
					},
					{
						image: "img/028/day028_08.jpg",
						legend: "C'était par terre devant l'arrêt de bus. C'est un compliment. Il ne m'était pas adressé, mais ça donne toujours le sourire de voir des trucs comme ça.",
					}
				]
			},
			{
				id: "29",
				title: "De Trondheim à Bodø",
				date: "Nuit du 5 au 6 octobre",
				html: [
					"Quand je reviens du centre-ville, c'est un peu la course. Carte SIM rechargée, ok. Devoir pour mercredi rendu, ok. Courses pour avoir de quoi manger au retour et de quoi grignoter en route, ok. Lessive, ok. Repas, douche, ok. Il ne me reste que peu de temps pour faire mon sac. Je m'y prends à plusieurs reprises, il ne faut pas trop se charger mais il ne faut pas non plus risquer d'avoir froid...",
					"A l'heure convenue avec les autres, et après avoir vérifié plusieurs fois que je n'oublie rien, je suis prête. Je descends retrouver Maxime au pied de la salle de sport. Il fait nuit noire mais je suis bien réveillée. Le sac de Maxime est un peu plus lourd que le mien, ouf, je ne passerai pas pour la fille qui trimbale sa maison. Antoine nous rejoint et nous marchons jusqu'à l'arrêt de bus. Il tarde à arriver ; il faut dire que nous avons pris beaucoup d'avance.",
					"Le bus traverse la ville ; nous sommes les dernier à en descendre. Il y a du monde dans la gare car trois trains vont partir. Nous récupérons nos billets sur une borne automatique puis devons attendre plus d'une heure ; nous avons pris un bus d'avance en cas de problème mais comme il n'y en a qu'un par heure le soir, cela fait beaucoup à attendre. Un peu avant l'arrivée du train, nous décidons d'aller voir sur le quai, mais il n'est pas arrivé. Nous attendons donc dans le couloir.",
					"Finalement le train arrive et nous nous séparons d'Antoine qui n'est pas dans le même wagon. Un groupe de quatre français ont pris nos places, mais nous en prenons d'autres. Le contrôleur qui passera peu de temps après n'y trouvera rien à redire tant le train est vide. En plus de prises et de Wi-Fi gratuit, chaque passager bénéficie d'un kit pour dormir : une couverture, un masque et des bouchons d'oreille. Au début Maxime et moi restons sagement à nos places côte à côte. Je regarde à l'extérieur, mais seules quelques lumières défilent dans la nuit. Je somnole plus ou moins mais n'arrive pas vraiment à dormir. J'imite donc le comportement des autres passagers en prenant deux sièges pour m'allonger, laissant ainsi la possibilité à Maxime d'en faire autant.",
					"Je ne dors que par intermittence, ayant toujours mal quelque part. Le contrôleur passe régulièrement ramasser les kits inutilisés et contrôler les nouveaux arrivants. Le train émet des sons et fait des arrêts régulièrement ; rien de tout cela n'est propice au sommeil.",
					"Le temps passe malgré tout, et quand j'ouvre le yeux vers sept heures, le spectacle du lever du soleil est magnifique. Je me précipite à la fenêtre en face de moi. A droite, les montagnes, noires, se découpent dans sa lumière. A gauche, les neiges éternelles renvoient sa lumière rosée. Si on regarde en face, là où se dirige le train, on croit parfois s'enfoncer dans la montagne...puis on traverse le tunnel avec excitation en attendant de voir quel nouveau paysage il va révéler. Des plans d'eau reflètent le ciel. Des moutons broutent dans des prés à peine dégelés. Au bout d'un moment, à gauche, on longe un magnifique fjord. Je ne suis pas du bon côté pour prendre des photos, mais je profite pleinement du spectacle.",
					"Une annonce me tire de ma rêverie. Il faut mettre les vêtements de randonnée, enfiler ses chaussures, refermer son sac. Le train s'arrête. On parle quelques instants avec le groupe de français qui n'ont pas tout à fait le même plan que nous. On retrouve Antoine sur le quai. Il y a d'autres étudiants de Trondheim, évidemment. Et voilà, nous sommes arrivés et nous dirigeons vers la gare de Bodø."
				],
				images: [
					{
						image: "img/029/day029_01.jpg",
						legend: "Vêtements chauds et imperméables, sac à dos... Je suis prête !",
					},
					{
						image: "img/029/day029_02.jpg",
						legend: "Un peu d'attente dans la gare de Trondheim.",
					},
					{
						image: "img/029/day029_03.jpg",
						legend: "Le lever du soleil par la fenêtre du train.",
					},
					{
						image: "img/029/day029_04.jpg",
						legend: "Comme le jour de mon arrivée dans l'avion, je constate que l'eau est omniprésente.",
					},
					{
						image: "img/029/day029_05.jpg",
						legend: "De la neige !",
					},
					{
						image: "img/029/day029_06.jpg",
						legend: "Un bout de montagne enneigée éclairé par le soleil.",
					},
					{
						image: "img/029/day029_07.jpg",
						legend: "L'eau encore.",
					},
					{
						image: "img/029/day029_08.jpg",
						legend: "Des arbres qui se découpent dans la lumière.",
					},
					{
						image: "img/029/day029_09.jpg",
						legend: "Il y a un magnifique fjord à gauche.",
					},
					{
						image: "img/029/day029_10.jpg",
						legend: "Difficile de rendre compte de la beauté du lieu avec des photos.",
					},
					{
						image: "img/029/day029_11.jpg",
						legend: "Encore un peu de neige...",
					},
					{
						image: "img/029/day029_12.JPG",
						legend: "Et encore un peu de lever de soleil !",
					},
					{
						image: "img/029/day029_13.jpg",
						legend: "Waouh.",
					},
					{
						image: "img/029/day029_14.jpg",
						legend: "Notre train à l'arrivée en gare de Bodø !",
					}
				]
			},
			{
				id: "30",
				title: "De Bodø à Sørvagen",
				date: "6 octobre",
				html: [
					"Il est un peu plus de neuf heures et demie quand nous arrivons à la gare. Nous avons donc six heures à occuper avant de prendre le ferry. Nous commençons par faire des courses pour le repas du midi, puis partons repérer le lieu d'embarquement. Le ferry est bien annoncé mais aucun guichet n'est ouvert ; impossible d'acheter les billets pour l'instant.",
					"Nous décidons d'aller randonner plutôt que de visiter la ville : nous aurons du temps pour ça le dernier jour avant de prendre le train. J'ai repéré un petit lac de montagne qui n'a pas l'air trop loin ni compliqué à atteindre, nous nous lançons donc dans cette direction. Une norvégienne nous interrompt : 'Are you tourists? -Yes -Are you going on a walk? -Yes -Do you want to put your bags in my house so you don't have to carry them? Oh I know, it's scary, I could steal them, but it's Norway!'. N'allez pas me dire après ça que les norvégiens ne sont pas accueillants. Elle nous laisse un moment pour décider en nous indiquant la direction de sa maison, mais nous ne réfléchissons pas trop longtemps avant de la suivre. Elle nous propose de mettre nos sacs dans un petit abri accolé à la maison, derrière son vélo, afin que nous puissions les récupérer à tout moment. Elle nous prête même un sac à dos plus petit pour que nous puissions y mettre les quelques affaires qui nous servirons pendant la balade. C'est une canadienne qui habite la Norvège depuis vingt ans.",
					"C'est donc allégés que nous nous attaquons à la montagne. Au début il suffit de suivre la route, puis heureusement c'est un chemin qui s'offre à nous. Cela monte fort. Nous atteignons très vite le lac, dont je ne sais s'il est assez grand pour mériter cette appelation. La vue sur Bodø et son fjord est déjà belle. Nous décidons de continuer un peu, puis arrivons rapidement à un point de vue magnifique. Il y a de l'eau et des montagnes tout autour. Certaines n'ont pas quitté les nuages depuis notre arrivée. Nous continuons encore un peu dans les arbres, mais le chemin redescend et nous ne savons pas exacteent où. Demi-tour donc pour manger au niveau de cette superbe vue. Enfin nous redescendons et récupérons nos affaires chez la dame avant de sonner chez elle pour la remercier. Nous notons le nom sur la boîte aux lettres, ce serait sympa de lui envoyer une carte.",
					"Redescendus en ville, nous décidons d'acheter de quoi manger le soir. Nous rejoignons ensuite le lieu d'embarquement pour le ferry. Un bateau énorme se trouve là ; mais nous demandons et il ne s'agit pas du nôtre. Il nous faudra attendre longtemps. Nous nous allongeons et endormons au soleil. Le groupe de français est là ; eux prennent le grand bateau car ils ont prévu un itinéraire différent. Enfin les gens commencent à s'aligner près de l'endroit où nous voyons des ferry accoster et repartir depuis tout à l'heure. Nous décidons d'en faire autant afin de s'assurer une place. On nous annonce un léger retard mais rapidement on nous fait écrire nos noms sur la liste et payer.",
					"Le bateau arrive enfin et les barrières se lèvent. Nous suivons les indications jusqu'au salon des passagers. Il y a très peu de monde comparé à la capacité. Nous choisissons trois sièges tout devant. Le bateau démarre ; nous nous amusons à comprendre quelles sont les îles que nous voyons grâce à la localisation sur nos portables. Le bateau tangue d'abord légèrement de droite à gauche, puis d'avant en arrière, de plus en plus fort. On sent quand il monte l'appréhension de la chute ; on le sent claquer contre les vagues quand il redescend. Il faut respirer calmement, en phase avec les montées et descentes successives. Je commence à ne plus me sentir très bien. Heureusement je m'endors. A mon réveil il fait nuit, il pleut, et la houle me donne toujours autant mal au coeur ; je me rendors.",
					"Enfin, je me réveille et l'arrivée est proche. Difficile de distinguer les îles. On voit d'abord la lumière d'un phare qui danse ; puis se stabilise, puis d'autres lumières. Le bateau accoste et nous voilà vite sur la terre ferme. Entre les voitures qui sorte et les files de celles qui doivent embarquer, difficile de trouver son chemin. Il pleut et il fait très noir. Nous finissons par trouver la Volkwagen bleue de notre hôte qui nous accueille chaleureusement. Il ne nous faut pas longtemps pour atteindre Sørvagen. Nous nous arrêtons devant une grande maison. A l'arrière, une partie du rez-de-chaussée est aménagée en petit logement, qui sera le nôtre le temps d'une nuit. C'est bien chauffée et très agréable.",
					"Après de monstrueuses assiettes de pâtes au pesto et des douches, nous décidons, aidées de la documentation à notre disposition, de quoi faire le lendemain, puis de l'heure de lever. Nous ne nous coucherons pas très tard ; la nuit précédente a été éprouvante, la journée fatiguante, et il nous faut de l'énergie pour demain."
				],
				images: [
					{
						image: "img/030/day030_01.JPG",
						legend: "Après de longues minutes sur la route, voilà un chemin !",
					},
					{
						image: "img/030/day030_02.JPG",
						legend: "Après quelques minutes, on sait déjà que la vue va être impressionnante.",
					},
					{
						image: "img/030/day030_03.JPG",
						legend: "Maxime (en rouge) et Antoine (en bleu).",
					},
					{
						image: "img/030/day030_04.JPG",
						legend: "Le 'lac' que j'avais repéré sur la carte !",
					},
					{
						image: "img/030/day030_05.JPG",
						legend: "Cette montagne restera dans les nuages toute la journée.",
					},
					{
						image: "img/030/day030_06.JPG",
						legend: "Pour une randonnée au hasard, ça s'annonce plutôt bien !",
					},
					{
						image: "img/030/day030_07.JPG",
						legend: "Pause observation.",
					},
					{
						image: "img/030/day030_08.JPG",
						legend: "Et voilà, Bodø et son fjord !",
					},
					{
						image: "img/030/day030_09.JPG",
						legend: "Il y a même un banc pour profiter...sur lequel nous mangerons.",
					},
					{
						image: "img/030/day030_10.JPG",
						legend: "",
					},
					{
						image: "img/030/day030_11.JPG",
						legend: "",
					},
					{
						image: "img/030/day030_12.JPG",
						legend: "",
					},
					{
						image: "img/030/day030_13.JPG",
						legend: "",
					},
					{
						image: "img/030/day030_14.JPG",
						legend: "Quelques rayons de soleil percent les nuages sur la montagne.",
					},
					{
						image: "img/030/day030_15.JPG",
						legend: "",
					},
					{
						image: "img/030/day030_16.JPG",
						legend: "",
					},
					{
						image: "img/030/day030_17.JPG",
						legend: "Au milieu des arbres on n'a une vue un peu meilleure sur cette partie du paysage.",
					},
					{
						image: "img/030/day030_18.JPG",
						legend: "",
					},
					{
						image: "img/030/day030_19.JPG",
						legend: "",
					},
					{
						image: "img/030/day030_20.JPG",
						legend: "Une photo prise sans le vouloir !",
					},
					{
						image: "img/030/day030_21.JPG",
						legend: "Le bateau est assorti à Maxime...mais on ne le prendra pas !",
					},
					{
						image: "img/030/day030_22.JPG",
						legend: "Petite sieste au soleil...",
					},
					{
						image: "img/030/day030_23.JPG",
						legend: "...puis dans le ferry...",
					},
					{
						image: "img/030/day030_24.JPG",
						legend: "...pour tout le monde !",
					},
					{
						image: "img/030/day030_25.JPG",
						legend: "Antoine s'attaque à la cuisson des spaghetti.",
					},
					{
						image: "img/030/day030_26.JPG",
						legend: "L'endroit est plutôt 'cosy' comme ils aiment dire ici !",
					}
				]
			},
			{
				id: "31",
				title: "De Sørvagen à Leknes",
				date: "7 octobre",
				html: [
					"Lorsque le réveil sonne à sept heures et demie, il est un peu dur de se lever. Nous nous préparons pour sortir à huit heures et demie et prendre le bus peu après neuf heures. Il suffit de laisser la clé sur un crochet à l'extérieur de la maison ; pas de vols en Norvège ! En sortant, nous admirons la vue : comme prévu, montagnes et lacs, c'est magnifique. Nous en profitons tout en marchant vers le présumé arrêt de bus. Nous demandons à quelqu'un dans une supérette de nous l'indiquer ; c'est simplement le bord de la route qui fait office d'arrêt.",
					"Quelques minutes après le bus arrive effectivement ; ils sont plus à l'heure ici qu'à Trondheim ! Nous demandons à aller à Leknes et nous asseyons. Les paysages que nous traversons sont tous plus beaux les uns que les autres, difficiles de détacher le regard de la vitre. Des personnes montent de temps en temps ; ce sont surtout des jeunes groupes de marcheurs comme nous où des locaux plutôt âgés. Nous regardons où nous nous trouvons grâce à la localisation et repérons ainsi les endroits où nous aimerions revenir.",
					"Nous descendons dans le centre ville de Leknes. C'est la ville où nous dormons ce soir, mais nous n'avons pas accès au logement pour l'instant, il nous faut donc garder nos sacs. Nous marchons un peu au hasard avant de repérer des endroits intéressants. Cependant, y accéder suppose de suivre la route, ce qui n'est pas intéressant. Nous essayons une première fois de couper par la montagne, mais arrivons dans un chemin privé. Le propriétaire sort de la maison et nous propose son aide sans aucune agressivité. Jusqu'ici ils parlent un anglais correct ! Nous le remercions et partons plus loin.",
					"Nous suivons la route un moment avant de trouver un moyen de prendre de la hauteur. Le trajet n'est pas évident, le terrain est très humide. Nous sommes obligés d'enjamber des ruisseaux, de traverser des portions de forêts, et de passer par dessus des clotûres électrifiées à plusieurs reprises. Seul Maxime nous le confirmera en y touchant par inadvertance. Après quelques étapes difficiles nous arrivons sur un chemin plus pratiquable, et réalisons au passage que nous aurions pu y accéder depuis la route beaucoup plus simplement que comme nous l'avons fait. Tant pis, c'était dun d'improviser !",
					"En contnuant nous comprenons la raison d'être des clotûres : des sons de cloches révèlent la présence de brebis. Elles sont postées là, à nous regarder ; nous ou le paysage peut-être. Nous leur faisons peur en arrivant et nous installons à leur place, meilleure vue sur Leknes et son fjord. Nous en profitons pour faire notre pause repas.",
					"Avant de trop nous refroidir, nous repartons. Cette partie de la marche est beaucoup plus simple mais ne semble jamais finir ; un sommet en cache toujours un autre ! Finalement nous arrivons quand même au point le plus haut, qui nous permet de voir à la fois Leknes et Storfjord de l'autre côté. Le ciel est gris mais la vue n'en n'est pas moins belle.",
					"Nous décidons de continuer notre route en direction de Storfjord, qui était notre objectif de départ. Nous dévions un peu de notre trajectoire pour s'approcher d'une rampe de saut à ski désafectée. Ensuite, la couleur orangée caractéristique des marécages nous annonce que nous n'allons pas pouvoir continuer tout droit. Nous sommes obligés de contourner la zone en marchant près des arbres pour ne pas risquer de nous enfoncer. Malheureusement cela nous éloigne de la route que nous suivons de haut et nous nous retrouvons dans un milieu boisé. Nous descendons un peu à l'aveuglette. A notre gauche se trouve maintenant un dense forêt. Maxime tient à ce que nous remontions un peu pour la contouner par la gauche, nous rapprochant de la route. Ce faisant, nous croisons à nouveau des moutons et enjambons une dernière clotûre.",
					"Nous entendons de nouveau la route au loin. Nous ne sommes donc plus perdus, mais nous ne pouvons pas aller tout droit 'sans corde pour faire du rappel', comme dit Antoine. Il nous faut là encore remonter pour trouver une pente plus douce. Finalement, nous traversons une portion de forêt qui nous amène directement sur le bord de la route, au risque d'effrayer les véhicules. Nous décidons de descendre la route jusqu'à un lac, mais il n'est pas accessible. Une pause goûter dans un arrêt de bus me permet de consulter les horaires ; il y en a un dans peu de temps. Nous partons donc à pied vers un fjord ; d'en bas aussi le paysage est beau. Antoine croit apercevoir un phoque ; c'est possible ici après tout. Sur ma photo, cela ressemble beaucoup à un chien.",
					"Nous finissons par faire demi-tour pour attendre le bus. Le prenons et marchons jusqu'au Rema pour acheter le repas du soir et du lendemain. Nous arrivons plus tôt qu'annoncé à notre logement mais notre hôte est là, et elle est adorable. Là encore l'appartement est une partie du rez-de-chaussée de la maison. Tout est propre et rangé, il y a même un chocolat sur le lit de chacun, et du thé et du café à disposition ! Il n'y a pas vraiment de quoi cuisiner, mais notre hôte nous ayant vu arriver avec nos pizzas surgelées, elle les emmène chez elle et nous les rapporte une fois cuites. Sacré service ! Nous nous couchons là encore pas trop tard après avoir repéré quoi faire le lendemain...et ce ne sera pas rien !"
				],
				images: [
					{
						image: "img/031/day031_01.JPG",
						legend: "Sacrée vue au lever !",
					},
					{
						image: "img/031/day031_02.JPG",
						legend: "Ah ces nuages collés au sommet des montagnes...",
					},
					{
						image: "img/031/day031_03.JPG",
						legend: "'Allez allez, on y va !'",
					},
					{
						image: "img/031/day031_04.JPG",
						legend: "Ce serait incroyable d'habiter là non ?",
					},
					{
						image: "img/031/day031_05.JPG",
						legend: "",
					},
					{
						image: "img/031/day031_06.JPG",
						legend: "",
					},
					{
						image: "img/031/day031_07.JPG",
						legend: "Un tout petit musée près de l'arrêt de bus !",
					},
					{
						image: "img/031/day031_08.JPG",
						legend: "Dans le bus, on découvre encore plus de beaux paysages.",
					},
					{
						image: "img/031/day031_09.JPG",
						legend: "Mais dites-moi, c'est magnifique cet endroit ! Ne vous inquiétez pas, on y reviendra...",
					},
					{
						image: "img/031/day031_10.JPG",
						legend: "",
					},
					{
						image: "img/031/day031_11.JPG",
						legend: "",
					},
					{
						image: "img/031/day031_12.JPG",
						legend: "",
					},
					{
						image: "img/031/day031_13.JPG",
						legend: "Début de la balade ! Enfin, plus exactement, après plus d'une heure à trouver un moyen d'arriver jusque-là. Le plus dur de la matinée est passé !",
					},
					{
						image: "img/031/day031_14.JPG",
						legend: "Le paysage est très vert ici.",
					},
					{
						image: "img/031/day031_15.JPG",
						legend: "Antoine prend de l'avance.",
					},
					{
						image: "img/031/day031_16.JPG",
						legend: "On commence à avoir une vue sympa.",
					},
					{
						image: "img/031/day031_17.JPG",
						legend: "",
					},
					{
						image: "img/031/day031_18.JPG",
						legend: "",
					},
					{
						image: "img/031/day031_19.JPG",
						legend: "Maxime défie les animaux de son appareil photo...",
					},
					{
						image: "img/031/day031_20.JPG",
						legend: "Et voilà sa photo !",
					},
					{
						image: "img/031/day031_21.JPG",
						legend: "Expérience culinaire n°52 : Un roulé 'taco'. Pas mal comme invention !",
					},
					{
						image: "img/031/day031_22.JPG",
						legend: "Allez, c'est reparti ! Cette fois c'est Maxime le premier...",
					},
					{
						image: "img/031/day031_23.JPG",
						legend: "...Antoine plus loin...",
					},
					{
						image: "img/031/day031_24.JPG",
						legend: "...et je suis quelque part au milieu !",
					},
					{
						image: "img/031/day031_25.JPG",
						legend: "On a atteint un point plus haut. On voit un peu moins bien de ce côté mais...",
					},
					{
						image: "img/031/day031_26.JPG",
						legend: "",
					},
					{
						image: "img/031/day031_27.JPG",
						legend: "...on voit de l'autre en même temps !",
					},
					{
						image: "img/031/day031_28.JPG",
						legend: "",
					},
					{
						image: "img/031/day031_29.JPG",
						legend: "",
					},
					{
						image: "img/031/day031_30.JPG",
						legend: "Dans cette deuxième partie, la végétation change. Le vert laisse place aux arbres hivernaux, qui précèdent les marécages puis la forêt...",
					},
					{
						image: "img/031/day031_31.JPG",
						legend: "Mais qu'est-ce que c'est ?",
					},
					{
						image: "img/031/day031_32.JPG",
						legend: "A priori, une rampe de saut à ski.",
					},
					{
						image: "img/031/day031_33.JPG",
						legend: "",
					},
					{
						image: "img/031/day031_34.JPG",
						legend: "",
					},
					{
						image: "img/031/day031_35.JPG",
						legend: "La végétation dans laquelle nous allons nous lancer maintenant ressemble un peu à celle d'en face, avec ses arbres orangés. Le lac semle proche et pourtant, on est bien loin de l'atteindre !",
					},
					{
						image: "img/031/day031_36.JPG",
						legend: "Une fois en bas, on se balade autour d'un fjord plutôt sympa...",
					},
					{
						image: "img/031/day031_37.JPG",
						legend: "",
					},
					{
						image: "img/031/day031_38.JPG",
						legend: "Chien ou phoque ? Le mystère subsiste...",
					},
					{
						image: "img/031/day031_39.JPG",
						legend: "",
					},
					{
						image: "img/031/day031_40.JPG",
						legend: "Là encore, sacré endroit pour habiter !",
					},
					{
						image: "img/031/day031_41.JPG",
						legend: "",
					},
					{
						image: "img/031/day031_42.JPG",
						legend: "",
					},
					{
						image: "img/031/day031_43.JPG",
						legend: "Le lac, enfin !",
					},
					{
						image: "img/031/day031_44.JPG",
						legend: "L'appartement est une nouvelle fois une partie de la maison et très agréable.",
					},
					{
						image: "img/031/day031_45.JPG",
						legend: "On a même chacun un chocolat en forme de coeur !",
					}
				]
			},
			{
				id: "32",
				title: "De Leknes à Ramberg",
				date: "8 octobre",
				html: [
					"Cette fois c'est à sept heures que nous nous levons pour sortir de la maison à huit. Nous prenons le bus de huit heures et demie à l'endroit où les précédents nous ont déposé la veille. Nous retournons vers le Sud et les paysages que nous avions traversé à l'aller.",
					"C'est à Ramberg que nous nous arrêtons. Lorsque le bus s'en approche, je vois la montagne sur laquelle nous allons monter...et je commence à me dire que ça ne va pas être évident. Il n'est déjà pas simple de trouver le début du chemin, caché au bout d'une petite rue entre les maisons, mais nous y arrivons grâce aux indications trouvées sur internet. Finalement il y a bien un chemin, qui monte incroyablement vite. Nous le prenons. Il faut s'arrêter de temps en temps pour reprendre son souffle ; mes mollets brûlent, le sac est lourd. Il ne vaut mieux pas regarder en bas en montant non plus. En montant, je croyais que nous aurions une belle bue sur la plage de Ramberg. C'est le cas, mais une bien meilleure surprise nous attend en haut : de l'autre côté, nous avons vue sur des fjords éclairés par le soleil levé depuis seulement quelques heures ; c'est un spectacle magnifique. Nous décidons de laisser nos sacs ici le temps de monter sur un point plus élevé ; après tout il n'y a pas de vols en Norvège, et personne ici.",
					"Après quelques photos, et la rencontre d'un lapin mort mais intact, nous récupérons nos sacs et décidons de monter plus haut sur l'autre partie de la montagne. Nous prenons un premier chemin qui ne monte pas trop, mais il s'arrête sur un pierrier vertigineux. Nous reroussons chemin pour en prendre un second. Celui-ci aussi s'arrête, bien qu'un peu plus haut. Nous montons donc comme nous pouvons jusqu'au chemin encore au-dessus. Il ne faut vraiment pas regarder en bas cette fois. Ni tomber, de préférence. Enfin nous voyons Ramberg et les environs. Nous prenons le temps d'admirer. Il y a une petite crête sur laquelle il est évident que des gens sont allés, mais ça nous semble un peu trop dangereux. Nous ne disposons plus non plus d'assez de temps pour continuer en espérant voir plus ; c'est le bon moment pour faire demi-tour.",
					"Avant d'atteindre l'endroit de notre première pause, un grand rapace nous survole. Les garçons pensent que c'est un aigle. Nous sommes derrière une butte et ne le voyons pas faire, mais quand nous arrivons, le lapin n'est plus aussi intact qu'au départ. Après une dissection visuelle et une mise en abîme photograpique du lapin mort, nous poursuivons notre route. Nous avons prévu beaucoup de temps pour descendre ; ça ne va pas être simple. Nous nous mettons d'accord : nous nous espaçons, chacun prend son temps, va à son rythme. Le sol est pentu et glissant ; il faut assurer ses pieds, les poser perpendiculairement à la pente. On est vite emporté par le poids de son sac ; il faut être très méfiant. Les garçons me distancent un peu mais m'attendent en bas. Je glisse plusieurs fois mais je suis sur mes gardes et le fait de s'attendre à une chute évite de s'y faire mal. Nous sommes descendus beaucoup plus vite que prévu et disposons donc d'une heure pour manger tranquillement. Nous optons sur la plage.",
					"Il n'y a pas meilleur repas que celui qu'on sait mériter. On a vraiment faim et on apprécie ce moment. Il fait plutôt beau ; ce sont les montagnes qui cachaient le soleil jusque-là, mais le voilà qui commence à passer au dessus. Nous allons tremper nos pieds dans la mer ; au-dessus du cercle polaire ! C'est tellement froid que c'en est paralysant. Nous prenons quelques photos promotionnelles pour l'ENSEA puis repartons à la station essence attendre le bus.",
				],
				images: [
					{
						image: "img/032/day032_01.jpg",
						legend: "Le lever du soleil à Leknes.",
					},
					{
						image: "img/032/day032_02.JPG",
						legend: "Déjà de magnifiques paysages aujourd'hui dans le bus !",
					},
					{
						image: "img/032/day032_03.JPG",
						legend: "",
					},
					{
						image: "img/032/day032_04.jpg",
						legend: "C'est aride, on ne se croirait pas en Norvège !",
					},
					{
						image: "img/032/day032_05.jpg",
						legend: "",
					},
					{
						image: "img/032/day032_06.jpg",
						legend: "",
					},
					{
						image: "img/032/day032_07.JPG",
						legend: "A peine arrivés à Ramberg, on grimpe déjà ! Ce réservoir d'eau nous a servi à repérer le chemin.",
					},
					{
						image: "img/032/day032_08.JPG",
						legend: "Ca grimpe dur !",
					},
					{
						image: "img/032/day032_09.JPG",
						legend: "De l'autre côté, une bonne surprise nous attend !",
					},
					{
						image: "img/032/day032_10.JPG",
						legend: "Il y a encore de quoi faire...",
					},
					{
						image: "img/032/day032_11.JPG",
						legend: "Le premier chemin s'arrête là, avec vue sur la plage.",
					},
					{
						image: "img/032/day032_12.JPG",
						legend: "",
					},
					{
						image: "img/032/day032_13.JPG",
						legend: "",
					},
					{
						image: "img/032/day032_14.JPG",
						legend: "",
					},
					{
						image: "img/032/day032_15.JPG",
						legend: "Deuxième chemin, pas possible de continuer non plus, on est au pied d'un gouffre !",
					},
					{
						image: "img/032/day032_16.JPG",
						legend: "Le troisième et dernier chemin que nous prendrons nous mène encore plus haut ! Bon, on ne s'aventurera pas sur cette crête.",
					},
					{
						image: "img/032/day032_17.jpg",
						legend: "",
					},
					{
						image: "img/032/day032_18.jpg",
						legend: "Des gens sont passés par là !",
					},
					{
						image: "img/032/day032_19.JPG",
						legend: "Mise en abîme du lapin : 1",
					},
					{
						image: "img/032/day032_20.jpg",
						legend: "Mise en abîme du lapin : 2",
					},
					{
						image: "img/032/day032_21.jpg",
						legend: "Mise en abîme du lapin : 3",
					},
					{
						image: "img/032/day032_22.jpg",
						legend: "Des structures pour faire sécher le poisson... Ca sent jusqu'ici !",
					},
					{
						image: "img/032/day032_23.jpg",
						legend: "Les gars m'ont un peu semée.",
					},
					{
						image: "img/032/day032_24.jpg",
						legend: "Vous voyez toujours le réservoir...donc on a attaqué la montagne par là !",
					},
					{
						image: "img/032/day032_25.jpg",
						legend: "",
					},
					{
						image: "img/032/day032_26.jpg",
						legend: "C'était même indiqué.",
					},
					{
						image: "img/032/day032_27.jpg",
						legend: "Alerte à Ramberg !",
					},
					{
						image: "img/032/day032_28.jpg",
						legend: "Les pieds presque dans l'eau au-dessus du cercle polaire !",
					},
					{
						image: "img/032/day032_29.jpg",
						legend: "Les pieds DANS l'eau au-dessus du cercle polaire !",
					},
					{
						image: "img/032/day032_30.jpg",
						legend: "Eh ! Je ne sens plus mes pieds...",
					},
					{
						image: "img/032/day032_31.jpg",
						legend: "Le soleil est passé au dessus de la montagne, c'est le moment idéal pour faire un peu de pub.",
					},
					{
						image: "img/032/day032_32.JPG",
						legend: "Selfie !",
					},
					{
						image: "img/032/day032_33.jpg",
						legend: "En attendant le bus...",
					}
				]
			},
			{
				id: "33",
				title: "De Ramberg à Vaerøy (en passant par Reine et Sørvagen)",
				date: "8 octobre",
				html: [
					"C'est la première fois que le bus est en retard, mais de peu. Nous arrivons à Reine à quatorze heures après avoir traversé le fjord en bus. C'est sans aucun doute possible le plus bel endroit du voyage. Et il fait incroyablement beau pour un mois d'octobre ; pas un nuage à l'horizon. 'Au Nord vais-je, là où brille le soleil...' Antoine et moi avons repéré une randonnée très célèbre mais déconseillée pour sa difficulté et sa dangerosité en l'état actuel. Nous comprenons en voyant la-dite montagne que cela ne sera probablement pas pour cette fois. Nous allons voir le début du chemin par acquis de conscience mais décidons qu'il n'est pas raisonnable de tenter le coup. Nous avons de lourds sacs, la fatigue d'une randonnée difficile ce matin, et la montée se fait cachée du fjord et du soleil ; si nous n'arrivons pas au bout nous ne serons recompensée d'aucune vue sur le lieu. Nous trouvons cependant largement de quoi nous balader dans les environs pendant les quelques heures dont nous disposons. Je réalise avec bonheur que je vois certainement parmi les plus beaux paysages de ma vie.",
					"Au moment de reprendre le bus vers Moskenes, où nous reprenons le ferry, question : faut-il plutôt aller là-bas ou au restaurant à Sørvagen ? Pas sûr qu'il y ait quoi que ce soit pour manger ou attendre à Moskenes, et nous avons plusieurs heures à occuper...dans la nuit et le froid. Sur les indications d'une vendeuse de Reine, nous descendons quand même à Moskenes où se trouve une brasserie au camping. Cependant sur place, elle se révèle fermée ; on est hors-saison. il ne nous reste plus qu'à marcher jusqu'à Sørvagen, faisant ainsi une boucle dans notre voyage. Nous mangeons dans un restaurant gastronomique réputé, 'Maren Anna'. Il nous est demandé de laisser nos sacs à l'entrée, de toute façon il n'y a pas de vol en Norvège. Le serveur finit par percer notre accent français et révéler qu'il l'est lui aussi. Il a d'abord habité à Oslo avant d'opter pour ce lieu il y a six ans, qui lui permet de pratiquer le surf tous les jours. 'J'ai pas choisi le métier, j'ai choisi les à-côté'...voilà qui fait rêver. Le repas est cher mais super bon.",
					"Après un passage dans une supérette pour acheter le repas du midi suivant, nous retournons à Moskenes à pied. Je suis devant, lampe blanche sur le front. Antoine derrière, lumière clignotante rouge et bandes réféchissantes dans le dos. Prudence est mère de sureté, paraît-il. Il y a un camion de glace ; en pleine nuit c'est assez improbable. Mais comme la nuit tombe avant vingt heures, pourquoi pas. Le port est joli de nuit. Nous n'attendons pas trop avant de monter dans le ferry...qui est encore plus vide que la première fois. Le trajet est complètement de nuit et ne permet pas de voir quoi que ce soit, nous dormons un peu.",
					"A notre arrivée, c'est cette fois une voiture blanche qui nous attend. Elle nous emmène à destination tout en nous montrant les lumières sur les montagnes pour nous conseiller où randonner demain. La nuit est claire, on voit plein d'étoiles. Les montagnes de nuit ont un aspect menaçant. Cette fois le logement est aménagé dans un grand hangar face à un bateau ; on dirait une habitation de pêcheur ! C'est un peu moins moderne que les précédents mais ça fait très typique et l'ambiance tamiée des lumières est agréable. Nous nous endormons bien vite après cette longue journée."
				],
				images: [
					{
						image: "img/033/day033_01.jpg",
						legend: "Passage de l'autre côté de l'île...au soleil !",
					},
					{
						image: "img/033/day033_02.jpg",
						legend: "Ca promet d'être beau...",
					},
					{
						image: "img/033/day033_03.jpg",
						legend: "...mais en fait c'est magnifique !",
					},
					{
						image: "img/033/day033_04.jpg",
						legend: "",
					},
					{
						image: "img/033/day033_05.JPG",
						legend: "",
					},
					{
						image: "img/033/day033_06.JPG",
						legend: "",
					},
					{
						image: "img/033/day033_07.JPG",
						legend: "Pourquoi y a-t-il du ciel par terre ?",
					},
					{
						image: "img/033/day033_08.JPG",
						legend: "Là encore c'est dingue ! L'eau est parfaitement lisse.",
					},
					{
						image: "img/033/day033_09.JPG",
						legend: "",
					},
					{
						image: "img/033/day033_10.JPG",
						legend: "Toujours ces mêmes structures pour la morue.",
					},
					{
						image: "img/033/day033_11.JPG",
						legend: "",
					},
					{
						image: "img/033/day033_12.JPG",
						legend: "Petit bémol : ici non plus les ligne électriques ne font pas défaut.",
					},
					{
						image: "img/033/day033_13.JPG",
						legend: "Et qu'on ne vienne pas me dire qu'il ne fait pas beau en Norvège.",
					},
					{
						image: "img/033/day033_14.JPG",
						legend: "",
					},
					{
						image: "img/033/day033_15.JPG",
						legend: "",
					},
					{
						image: "img/033/day033_16.jpg",
						legend: "Bodø est là au loin...",
					},
					{
						image: "img/033/day033_17.JPG",
						legend: "Reinebringen, cette fameuse montagne qu'on n'escaladera pas (cette fois !).",
					},
					{
						image: "img/033/day033_18.JPG",
						legend: "Il y a bien des gens là-haut.",
					},
					{
						image: "img/033/day033_19.JPG",
						legend: "",
					},
					{
						image: "img/033/day033_20.jpg",
						legend: "Retour à Moskenes, où on cherche à manger au camping.",
					},
					{
						image: "img/033/day033_21.jpg",
						legend: "Puis on marche le long du port pour trouver un restaurant. Pendant ce temps, le soleil se couche doucement.",
					},
					{
						image: "img/033/day033_22.jpg",
						legend: "",
					},
					{
						image: "img/033/day033_23.jpg",
						legend: "",
					},
					{
						image: "img/033/day033_24.jpg",
						legend: "",
					},
					{
						image: "img/033/day033_25.jpg",
						legend: "",
					},
					{
						image: "img/033/day033_26.jpg",
						legend: "'Graved' salmon : ni vraiment fumé ni vraiment cuit, mais super bon !",
					},
					{
						image: "img/033/day033_27.jpg",
						legend: "",
					},
					{
						image: "img/033/day033_28.jpg",
						legend: "Vous voyez comme la montagne est menaçante de nuit ?",
					},
					{
						image: "img/033/day033_29.jpg",
						legend: "La cale du ferry, où stationnent les voitures pendant la traversée. Nous sommes parmi les premiers à entrer ! Mais à pied.",
					},
					{
						image: "img/033/day033_30.jpg",
						legend: "Selferry !",
					},
					{
						image: "img/033/day033_31.JPG",
						legend: "Et un nouvel appartement 'cosy' pour les trois aventuriers !",
					},
					{
						image: "img/033/day033_32.JPG",
						legend: "La fenêtre du salon donne sur ce bateau de pêcheur.",
					}
				]
			},
			{
				id: "34",
				title: "Vaerøy",
				date: "9 octobre",
				html: [
					"Toujours plus tôt ! C'est à six heures quarante-cinq que le réveil sonne cette fois. Nous nous extirpons du sommeil puis de l'habitation, vers sept heures et demie. Le but est d'assister au lever du soleil sur la mer. Nous laissons simplement les clés sur la porte comme demandé. Décidément, ils ont confiance. Nous sommes effectivement en pleine zone de pêche, au milieu des installations qui servent à faire sécher les morues. Cela explique la permanente odeur de poisson partout sur les îles ! Et pourtant il n'y en a pas en ce moment, je n'ose pas imaginer en saison. Nous marchons jusqu'à la mer. Pari gagné ; nous asistons au lever du soleil. Le ciel est couvert d'un plafond nuageux ; seule une bande à l'horizon nous permet de distinguer des montagnes au loin. Nous croyons au départ qu'il s'agit des Lofoten, Susan a dit qu'on pouvait les voir d'ici. Nous attendons que le soleil monte assez haut pour être caché dans les nuages et partons grimper sur la montagne que nous avons repéré.",
					"Le chemin commence par des pierres. Ensuite, il monte assez violemment jusqu'à un point assez élevé. Nous voyons des îles de l'autre côté...c'est le reste de Vaerøy ? Je regarde la carte. Ah non, ce sont les Lofoten, génial ! Mais alors, les montagnes de l'autre côté de la mer...c'est le continent ! Incroyable. En y regardant mieux, nous sommes cernés de toute parts par les montagnes. A gauche le reste des Lofoten : Moskenesøy, Vestvagøy... plus au loin probablement Narvik, là où nous voyons moins. Ensuite la côté, dont certainement Bodø. Plus à droite , la suite de la côté... Et enfin la dernière île des Lofoten, Røst. Sans oublier la vue quasi-complète de l'île sur laquelle nous sommes, Vaerøy. C'est incroyable.",
					"Là où nous sommes, le chemin s'arrête. Mais, comme je me suis faite plusieurs fois la réflexion cette semaine, il est humain de vouloir toujours aller plus haut. Dépasser ses limites. Nous avons envie de continuer. Nous laissons là nos sacs (parce qu'en Norvège...bref) pour monter plus aisément. Là ça relève de l'escalade. Ou peut-être de la folie. Je n'ai jamais fait beaucoup de bêtises, mais là on est carrément dans l'inconscience de la jeunesse, on se sent invincible...alors que je n'ose pas imaginer le résultat d'une chute. Je place bien mes pieds en tâtonnant toujours plusieurs fois pour m'assurer que je ne vais pas glisser. La descente ne va pas être simple ! En haut, c'est vertigineux. Je ne m'approche pas trop du bord. Mais la vue en vaut vraiment la peine. Je fais encore un tour panoramique pour constater que les montagnes et l'eau sont partout.",
					"Comble de la folie ; Maxime décide de s'engager sur la crête pour atteindre un autre point de vue. Ca a l'air plus simple, nous le suivons. Ca l'est effectivement, mais c'est aussi tout à fait effrayant. Il y a des trous de temps en temps, il faut être méfiant. Nous passons un moment là ; nous nous sommes donnés du mal pour y arriver ! Finalement nosu revenons de notre escapade. En prenant notre temps dans la descente, comme la veille. Pour ne pas faire d'erreur. Aucune honte à être lent, à étudier le meilleur chemin avant de s'engager ou à s'asseoir pour faciliter le passage. Nous atteignons finalement nos sacs et faisons une pause goûter. Nous trouvons un moyen un peu plus simple de redescendre ensuite.",
					"Nous voilà en bas de la montagne, sur les rochers. Je prends une photo ; c'est mieux de la prendre après coup. Comme des enfants, nous jouons à repérer les coquillages et les crabes dans les rochers. Il y en a plein ! Finalement nous nous dirigeons vers l'autre côté de l'île. Ah, il y aurait eu une autre randonnée sympa à faire ici...je note. Nous montons sur une petite bute derrière les maisons, qui donne vue sur un petit fjord et sur Røst. En redescendant nous nous dirigeons tranquillement vers le ferry...et le terme de notre périple.",
					"Le lieu d'embarquement est désert. Une voiture était là à l'instant mais s'en est allée. Pas l'ombre d'un ferry ni indice de son arrivée. Nous commençons à nous inquiéter. Puis à franchement paniquer, sans se l'avouer les uns aux autres. Nous appelons le numéro d'information et tombons sur quelqu'un à l'intérieur du ferry qui nous dit être juste à l'extérieur du port. Alors seulement les voitures et les piétons commencent à arriver ; puis nous apercevons le ferry. Je regarde ma montre : il est parfaitement à l'heure, nous avons simplement eu peur car les précédents avaient toujours de l'avance ou des gens sur place pour nous informer. Nous montons à bord ; là encore il y aura peu de passagers."
				],
				images: [
					{
						image: "img/034/day034_01.JPG",
						legend: "Le bateau même bateau le lendemain matin au lever du soleil !",
					},
					{
						image: "img/034/day034_02.jpg",
						legend: "Ai-je besoin d'expliquer à nouveau de quoi il s'agit ?",
					},
					{
						image: "img/034/day034_03.JPG",
						legend: "Le lever du soleil !",
					},
					{
						image: "img/034/day034_04.JPG",
						legend: "On voit les montagnes de la côte, au loin.",
					},
					{
						image: "img/034/day034_05.JPG",
						legend: "",
					},
					{
						image: "img/034/day034_06.JPG",
						legend: "",
					},
					{
						image: "img/034/day034_07.JPG",
						legend: "",
					},
					{
						image: "img/034/day034_08.jpg",
						legend: "Cette fois c'est cette pyramide qui me servira de repère de distance.",
					},
					{
						image: "img/034/day034_09.jpg",
						legend: "",
					},
					{
						image: "img/034/day034_10.jpg",
						legend: "",
					},
					{
						image: "img/034/day034_11.jpg",
						legend: "",
					},
					{
						image: "img/034/day034_12.JPG",
						legend: "Plus haut !",
					},
					{
						image: "img/034/day034_13.JPG",
						legend: "",
					},
					{
						image: "img/034/day034_14.JPG",
						legend: "Mais ces îles, ce sont...mais oui, les Lofoten ! Wouaaaah !",
					},
					{
						image: "img/034/day034_15.JPG",
						legend: "End of the road ! La rando s'arrête là...où l'escalade commence.",
					},
					{
						image: "img/034/day034_16.JPG",
						legend: "Toujours plus haut !",
					},
					{
						image: "img/034/day034_17.jpg",
						legend: "Vraiment Maxime, c'est safe, on peut te suivre ?",
					},
					{
						image: "img/034/day034_18.JPG",
						legend: "",
					},
					{
						image: "img/034/day034_19.JPG",
						legend: "Sur la gauche, au loin, on distingue la dernière île des Lofoten, Røst.",
					},
					{
						image: "img/034/day034_20.JPG",
						legend: "",
					},
					{
						image: "img/034/day034_21.JPG",
						legend: "",
					},
					{
						image: "img/034/day034_22.jpg",
						legend: "On redescend ! Non non Antoine ne tente pas un camouflage dans la montagne, il prend juste une fleur bleue en photo, qui poussait là au milieu des rochers.",
					},
					{
						image: "img/034/day034_23.jpg",
						legend: "",
					},
					{
						image: "img/034/day034_24.jpg",
						legend: "Mieux vaut regarder après coup hein ?",
					},
					{
						image: "img/034/day034_25.jpg",
						legend: "Bulotville !",
					},
					{
						image: "img/034/day034_26.JPG",
						legend: "",
					},
					{
						image: "img/034/day034_27.JPG",
						legend: "",
					},
					{
						image: "img/034/day034_28.JPG",
						legend: "",
					},
					{
						image: "img/034/day034_29.JPG",
						legend: "",
					},
					{
						image: "img/034/day034_30.JPG",
						legend: "",
					},
					{
						image: "img/034/day034_31.JPG",
						legend: "Serait-ce un rayon de soleil ?",
					},
					{
						image: "img/034/day034_32.JPG",
						legend: "",
					},
					{
						image: "img/034/day034_33.jpg",
						legend: "Et voilà, le 'Vaerøy' qui nous ramènera à Bodø !",
					}
				]
			},
			{
				id: "35",
				title: "De Vaerøy à Bodø",
				date: "9 octobre",
				html: [
					"Nous mangeons dans le ferry avant de nous endormir. Les Lofoten ont vite disparu derrière, dans leur plafond de nuages. Mais le spectacle de la côté qui s'approche est plus beau à chaque réveil. Nous allons vers cette bande de beau temps que nous voyons ce matin...bientôt il n'y a plus un nuage. D'ailleurs, la mer est très calme.",
					"Après avoir pleinement profité du soleil sur les montagnes, révélant les reliefs ou faisant des montagnes des ombres par couches successives, nous arrivons à Bodø. Nous accostons ; et nous voilà en ville pour six heures. Nous allons nous asseoir près du port, au soleil, pendant une heure. Nous allons ensuite sur la jetée admirer le soleil sur la mer. Nous allons ensuite vers le centre ville où nous nous arrêtons un moment. Il n'y a pas grand chose dans cette ville. Les sacs se font lourds ; les consignes à la gare étaient trop chères.",
					"Nous réussissons à patienter suffisamment pour aller manger dans une pizzeria. Nous y restons le plus longtemps possible, au chaud. En sortant, nous jouons à un jeu lumineux dans la rue. Il y a plusieurs modes, notamment pour apprendre aux enfants à compter ou à ranger dans l'ordre alphabétique. Mais le plus drôle est le jeu qui consiste à choisir une couleur et à la toucher quand elle apparaît ; on dispose d'un temps imparti de plus en plus court pour courir jusqu'au plot où elle s'affiche. Nous nous prenons au jeu, riant. Cela nous réchauffe de courir !",
					"Finalement, nous nous dirigeons tranquillement vers la gare. Le train est là mais fermé ; nous y entrons dès l'ouverture des portes. Nous ne respectons pas nos places cette fois ; mais la contrôleuse nous demande de le faire car celles que nous avons choisies sont prises. Nous nous séparons donc ; peu importe puisqu'il faut dormir."
				],
				images: [
					{
						image: "img/035/day035_01.JPG",
						legend: "Départ du port de Vaerøy !",
					},
					{
						image: "img/035/day035_02.JPG",
						legend: "En s'en éloignant viens le beau temps...",
					},
					{
						image: "img/035/day035_03.JPG",
						legend: "...ce qui est confirmé lorsqu'on regarde l'île s'éloigner à l'arrière du bateau.",
					},
					{
						image: "img/035/day035_04.JPG",
						legend: "",
					},
					{
						image: "img/035/day035_05.JPG",
						legend: "",
					},
					{
						image: "img/035/day035_06.JPG",
						legend: "Comme au cinéma !",
					},
					{
						image: "img/035/day035_07.JPG",
						legend: "",
					},
					{
						image: "img/035/day035_08.JPG",
						legend: "On approche de Bodø !",
					},
					{
						image: "img/035/day035_09.jpg",
						legend: "",
					},
					{
						image: "img/035/day035_10.jpg",
						legend: "",
					},
					{
						image: "img/035/day035_11.jpg",
						legend: "Arrivés !",
					},
					{
						image: "img/035/day035_12.jpg",
						legend: "Un demi-tour pour se mettre à quai, et nous pourrons descendre.",
					},
					{
						image: "img/035/day035_13.jpg",
						legend: "Petite pause au soleil.",
					},
					{
						image: "img/035/day035_14.JPG",
						legend: "",
					},
					{
						image: "img/035/day035_15.JPG",
						legend: "Le port de Bodø.",
					},
					{
						image: "img/035/day035_16.JPG",
						legend: "",
					},
					{
						image: "img/035/day035_17.JPG",
						legend: "",
					},
					{
						image: "img/035/day035_18.JPG",
						legend: "",
					},
					{
						image: "img/035/day035_19.JPG",
						legend: "",
					},
					{
						image: "img/035/day035_20.JPG",
						legend: "",
					},
					{
						image: "img/035/day035_21.JPG",
						legend: "",
					},
					{
						image: "img/035/day035_22.JPG",
						legend: "",
					},
					{
						image: "img/035/day035_23.JPG",
						legend: "",
					},
					{
						image: "img/035/day035_24.JPG",
						legend: "",
					},
					{
						image: "img/035/day035_25.JPG",
						legend: "",
					},
					{
						image: "img/035/day035_26.JPG",
						legend: "",
					},
					{
						image: "img/035/day035_27.JPG",
						legend: "",
					},
					{
						image: "img/035/day035_28.JPG",
						legend: "",
					},
					{
						image: "img/035/day035_29.JPG",
						legend: "",
					},
					{
						image: "img/035/day035_30.JPG",
						legend: "Délire l'église !",
					},
					{
						image: "img/035/day035_31.JPG",
						legend: "",
					},
					{
						image: "img/035/day035_32.JPG",
						legend: "",
					},
					{
						image: "img/035/day035_33.jpg",
						legend: "",
					},
					{
						image: "img/035/day035_34.jpg",
						legend: "",
					},
					{
						image: "img/035/day035_35.jpg",
						legend: "",
					},
					{
						image: "img/035/day035_36.jpg",
						legend: "Drôle d'oiseau !",
					},
					{
						image: "img/035/day035_37.jpg",
						legend: "Après l'effort, le réconfort ! Bon d'accord, on avait déjà été récompensés, mais on est bien fatigués !",
					},
					{
						image: "img/035/day035_38.jpg",
						legend: "",
					},
					{
						image: "img/035/day035_39.JPG",
						legend: "Ce jeu lumineux, conçu initialement pour les enfants, intrigue et occupe aussi les plus grands !",
					},
					{
						image: "img/035/day035_40.jpg",
						legend: "Allez, il n'y a personne, je peux prendre deux sièges non ?",
					}
				]
			},
			{
				id: "36",
				title: "De Bodø à Trondheim",
				date: "Nuit du 9 au 10 octobre",
				html: [
					"Avec la fatigue du voyage, il est bien moins difficile de dormir. Même si cela reste par intermittence. Comme à l'aller, les contrôleurs sont aux petits soins, réveillant les gens avant leur arrêt et passant et repassant dans le train. Le jour finit par se lever. Le spectacle n'est pas aussi beau, mais c'est quand même sympa de voir le soleil se lever sur les alentours de Trondheim.",
					"Malheureusement il n'y a pas de bus aussi tôt un dimanche matin. Nous rentrons à pied. Trondheim se réveille. Les rues sont désertes. Le soleil se lève, illuminant les maisons de couleurs chaudes. Les vitrines restées allumées toute la nuit sont pathétiques et brillent par leur inutilité en ce dimanche matin. Les panneaux semble eux aussi hors propos. Revoir des endroits connus sous cette lumière est génial. L'herbe sur le bord des routes est gelée.",
					"Nous faisons un léger détour pour éviter la terrible côte de Moholt. Assez de montées pour un moment. Le sac fait vraiment mal au dos maintenant. Arrivés chez nous, nous nous séparons pour une douche et un repos bien mérités. Il va falloir un sas pour revenir doucement à la réalité, après un tel dépaysement et une présence en permanence. L'appartement est dans un état déplorable, conformément au mail de contrôle du nettoyage que j'ai reçu, mais tant pis. Je vais me reposer et m'endors, apaisée."
				],
				images: [
					{
						image: "img/036/day036_01.jpg",
						legend: "Les premières lumières du soleil...",
					},
					{
						image: "img/036/day036_02.jpg",
						legend: "Les fjords autour de Trondheim.",
					},
					{
						image: "img/036/day036_03.jpg",
						legend: "",
					},
					{
						image: "img/036/day036_04.jpg",
						legend: "Le port.",
					},
					{
						image: "img/036/day036_05.jpg",
						legend: "Le place centrale, à l'angle de Kongens (rue du roi) et Prinsens (rue du prince). La figure et les marques au sol forment un cadran solaire.",
					},
					{
						image: "img/036/day036_06.jpg",
						legend: "Cette vue bien connue.",
					},
					{
						image: "img/036/day036_07.jpg",
						legend: "Une partie de la colline prend de superbe couleurs.",
					},
					{
						image: "img/036/day036_08.jpg",
						legend: "",
					},
					{
						image: "img/036/day036_09.jpg",
						legend: "",
					}
				]
			},
			{
				id: "37",
				title: "Sas de décompression : d'un voyage vers la réalité, de la réalité vers un nouveau voyage",
				date: "10, 11, 12, 13, 14 octobre",
				html: [
					"Et voilà, retour à la réalité ! Il faut vite récupérer pour se remettre sur les rails : lessive, courses, devoirs... La semaine se déroule sans encombres même si ce n'est pas évident d'accepter de reprendre une vie normale.",
					"Les coefficients sont élevés et on voit quelques faibles aurores, mais à chaque fois qu'on sort pour avoir un meilleur panorama, elles disparaissent ! Mais bon, même faibles, c'est incroyable de se dire qu'elles sont là, par la fenêtre.",
					"On envisage un voyage le week-end suivant : randonnée vers la cabine la plus difficile, Kamtjønnkoia. Vendredi soir, ce sera donc courses et activité sandwiches !"
				],
				images: [
					{
						image: "img/037/day037_01.jpg",
						legend: "Ca y est, le gel nous attaque ! Cachée du soleil par les bâtiments, cette parcelle d'herbe ne dégèle pas de la journée.",
					},
					{
						image: "img/037/day037_02.jpg",
						legend: "Ah, le brouillard aussi nous attaque !",
					},
					{
						image: "img/037/day037_03.jpg",
						legend: "Passée en rouge le jour de la célébration de la réunification allemande (mais c'est probablement une coïncidence), la tour de Tyholt nous gêne moins quand on chasse les aurores boréales.",
					},
					{
						image: "img/037/day037_04.jpg",
						legend: "Comme je n'ai pas beaucoup à raconter cette semaine, je ressors des photos du déut que j'ai récupérées des autres. Ici, la contre-photo de groupe puisqu'on n'apparaît pas sur la vraie !",
					},
					{
						image: "img/037/day037_05.jpg",
						legend: "Et une autre !",
					},
					{
						image: "img/037/day037_06.jpg",
						legend: "Et encore !",
					},
					{
						image: "img/037/day037_07.jpg",
						legend: "La photo de propagande à la forteresse, au-dessus de la ville.",
					},
					{
						image: "img/037/day037_08.jpeg",
						legend: "A Bakklandet pendant la semaine d'orientation.",
					},
					{
						image: "img/037/day037_09.jpeg",
						legend: "Le jour des hamburgers dans le jardin de la International House !",
					},
					{
						image: "img/037/day037_10.jpg",
						legend: "Expérience culinaire n°52 : Bon, je ne suis toujours pas convaincue par le pain 'français' ici, mais ça fera l'affaire pour mes sandwiches.",
					},
					{
						image: "img/037/day037_11.jpg",
						legend: "Expérience culinaire n°53 : Je ne suis pas plus convaincue par le jambon. Je serai contente d'en retrouver du vrai en France !",
					},
					{
						image: "img/037/day037_12.jpeg",
						legend: "Expérience culinaire n°54 : C'est la première fois que j'achète du fromage norvégien ! Ca n'a pas beaucoup de goût, mais ça me manquait.",
					},
					{
						image: "img/037/day037_13.jpeg",
						legend: "Expérience culinaire n°55 : Une tuerie ces gâteaux. Ca ressemble aux granolas sans le chocolat, avec le point commun qu'on ne peut pas parier qu'on n'en mangera qu'un.",
					}
				]
			},
			{
				id: "38",
				title: "A l'assaut de Kammtjønnkoia",
				date: "15 octobre",
				html: [
					"On s'est donné rendez-vous tôt pour partir ; il y a plus de deux heures de route suivies de quatre heures de marche. Tout le monde met son sac dans le coffre et embarque dans la voiture. 'Mathilde, tu as bien les clés ?' Ce qui devait être une vérification de routine, dont la réponse positive était une évidence, se trnasforme en drame le temps d'un instant. Elle ne les a pas.",
					"On préfère en rire, rien ne sert de la blâmer, elle s'en veut déjà assez. Et puis ça arrive, et personne ne lui a rappelé. Nous réfléchissons un moment, mais il nous semble hors de question de rentrer chez nous de cette manière. Nous décidons de partir quand même, cherchant pendant le trajet et par tous les moyens à contacter ceux qui étaient dans la cabine la nuit précédente. Nous envisageons la possibilité de faire l'aller-retour dans la journée et de dormir dans une autre cabine pas loin dont nous savons qu'elle ne possède pas de clé ; et où il reste de la place.",
					"Après deux heures de route dans l'attente d'une réponse des personnes contactées, mais sans succès, nous approchons de notre destination. Il y a un grand lac, il fait beau, hormis l'incident des clés tout est idyllique. Nous commençons à marcher. La première partie entre les arbres n'est pas trop compliquée. Le sol est sec, nous avons beaucoup de chance. On traverse des ruisseaux qui commencent à geler. Quittant les arbres, le paysage qui s'offre à nous est extrêmement aride semble-t-il ; on se croirait plus dans les montagnes aux Etats-Unis (d'après Mathilde, et l'idée qu'on s'en fait avec les photos) qu'en Norvège.",
					"Le chemin longe une rivière partiellement gelée. Nous savons depuis le début qu'il nous faudra la traverser, mais il faut être stratégique sur le choix de l'endroit pour ne pas se mouiller. Le chemin, d'ailleurs très bien indiqué, nous fait remonter jusqu'à ce qu'une flèche nous montre clairement que c'est là qu'il faut traverser. Nous nous exécutons. De l'autre côté, nous nous rendons compte que nous sommes peut-être allés un peu trop loin et dévions du chemin que tout le monde semble suivre pour nous aventurer dans une zone qui doit être un marécage gelé. C'est assez traître, on ne sait jamais trop où on met les pieds.",
					"Nous décidons de nous arrêter pour manger, près d'une partie de la rivire cette fois encore plus gelée, sans cesser de guetter un message ou un groupe de quatre personnes pour obtenir la clé. Après le repas, nous repérons des gens qui pourraient être les étudiants que nous cherchons. Florian part en courant à leur rencontre pendant que nous allons droit sur un groupe poser des questions. Personne ne correspond au groupe cependant, et les gens nous donnent des indications contradictoires à propos de la cabine que nous cherchons. En effet, la cabine étant de difficulté élevée, nous nous attendons à une longue marche, un relief difficile ou qu'elle soit difficile à trouver.",
					"Toujours sans clés, nous continuons notre route. Arrive une bifurcation : nous pouvons continuer vers la cabine ou monter pour avoir une meilleure vue. Si nous avions les clés de la cabine, c'est le genre d'excursion que nous aimerions faire le lendemain matin ; c'est donc peut-être là que sont les précédents dormeurs. En conséquence, nous décidons de nous séparer : Florian et Mathilde vont monter 'à la rencontre' éventuelle des autres, et Marjolaine, Judith et moi partons à la recherche de la cabine. Bien que la cabine semble plus proche en passant par la gauche du lac, nous le contournons par la droite comme indique le chemin, qui n'est certainement pas là pour rien.",
					"A peine de l'autre côté, Marjolaine reçoit un appel. Nous percevons dans sa voix que les clés ont été interceptées, mais attendons qu'elle raccroche pour qu'elle nous le confirme et que nous sautions de joie. C'est soulagées que nous poursuivons notre recherche. Cette fois c'est une montagne qui nous barre la route. Nous tentons d'atteindre la cabine par la droite comme conseillé, à la rencontre de la neige. Mais tombons à plusieurs reprises sur les plaques de glace et faisons demi-tour. C'est à ce moment que Florian et Mathilde nous rejoignent, et nous partons ensemble à l'assaut du flanc gauche de la montagne. Marjolaine, Judith et moi descendons un peu pour l'attaquer de moins haut ; nous ne sommes pas rassurées par les empilements de pierre qui glissent les unes sur les autres.",
					"Nous revoilà donc près du lac, dont nous découvrons la séparation entre partie gelée et non gelée. La glace est épaisse mais parfaitement transparente ; on peut marcher sur l'eau, c'est donc l'occasion de faire quelques photos. Nous rejoignons ensuite Florian et Mathilde qui ont déjà ouvert la porte et posé leurs affaires. La cabine est là, non loin d'une cabine privée, et au bord d'un lac cette fois complètement gelé. Florian coupe du bois ; nous allons chercher de l'eau un peu plus bas (le lac étant gelé !) pour faire du thé. Marjolaine a fait des gâteaux maison, c'est top ! Nous allons sur le deuxième lac, au pied de notre cabine. On joue à se faire peur en allant le plus loin possible.",
					"Près de la cabine, nous avons trouvé très peu de bois. Nous sommes censés en apporter autant que nous en utilisons pour que les suivants en aient à leur arrivée. Le bois ne pouvant pas être acheminé jusqu'à la cabine autrement qu'à pied, une carte à l'intérieur nous indique où devrait se trouver la pile. C'était sur le chemin, mais nous avons dû la manquer. Nous y retournons, mais rien à faire, nous ne trouvons rien. J'espère que l'approvisionnement sera refait bientôt, sinon ceux qui s'y rendront en hiver vont peiner. Nous récoltons quelques planches et restes de feu de camp pour ne pas rentrer bredrouilles ; mais c'est tout de même une maigre récolte.",
					"Au retour Florian lance le feu ; il fait 25°C à l'intérieur ! Nous mangeons : cacahuètes, spaghetti au pesto, thé, chocolat, noisettes, amandes : chacun a apporté sa contribution pour le groupe. Il y a une guitare mais personne ne sait en jouer ; ce sera donc jeu de carte à la bougie.",
					"La nuit tombée, nous décidons de nous aventurer dehors. Ce n'est absolument pas rassurant, mais la pleine Lune donne une lumière largement suffisante pour que nous puissions nous déplacer sans problème. La vue sur les lacs et sur le paysage d'une manière générale est absolument magique. Nous prenons quelques photos avant de retourner nous aventurer sur le lac ; c'est encore plus drôle de nuit. Un grand craquement de la glace, semblable à un grognement animal, effraye tout le monde et nous nous réfugions sur la rive. Il est temps d'aller se coucher. Florian décide de sortir son matelas pour dormir dehors."
				],
				images: [
					{
						image: "img/038/day038_01.jpg",
						legend: "Déjà dans la voiture, on sent qu'on va profiter d'un paysage sublime.",
					},
					{
						image: "img/038/day038_02.jpg",
						legend: "Dans les starting blocks : se procurera-t-on la clé ?",
					},
					{
						image: "img/038/day038_03.JPG",
						legend: "On prend de la hauteur sur le lac...qui ne sera pas le dernier qu'on verra.",
					},
					{
						image: "img/038/day038_04.JPG",
						legend: "Bienvenue en Norvège ! Ah bon ?",
					},
					{
						image: "img/038/day038_05.JPG",
						legend: "C'est déjà gelé ici...imaginez plus haut !",
					},
					{
						image: "img/038/day038_06.JPG",
						legend: "Glissade garantie.",
					},
					{
						image: "img/038/day038_07.JPG",
						legend: "La météo semble avec nous.",
					},
					{
						image: "img/038/day038_08.JPG",
						legend: "La rivière se sépare en deux bras.",
					},
					{
						image: "img/038/day038_09.jpg",
						legend: "La flèche pointe dans la direction de la rivière...c'est le moment de traverser.",
					},
					{
						image: "img/038/day038_10.jpg",
						legend: "Ca n'a pas l'air trop compliqué.",
					},
					{
						image: "img/038/day038_11.JPG",
						legend: "Waouh.",
					},
					{
						image: "img/038/day038_12.jpg",
						legend: "La couleur jaune indique bien une zone marécageuse, mais le gel nous protège de ses dangers.",
					},
					{
						image: "img/038/day038_13.JPG",
						legend: "Pause repas bien méritée.",
					},
					{
						image: "img/038/day038_14.JPG",
						legend: "On avance vers l'ombre...",
					},
					{
						image: "img/038/day038_15.JPG",
						legend: "...avant d'y être vraiment. Il fait plus froid d'un seul coup !",
					},
					{
						image: "img/038/day038_16.JPG",
						legend: "Ah, premier lac gelé qui devrait nous aider à trouver la cabine. Elle est là-bas sur la gauche, mais mieux vaut contourner le lac entièrement par la droite pour l'atteindre.",
					},
					{
						image: "img/038/day038_17.JPG",
						legend: "Ce n'était pas le bon côté pour atteindre la cabine, mais on a retrouvé un peu de soleil !",
					},
					{
						image: "img/038/day038_18.JPG",
						legend: "Cela ne durera pas, il va bientôt passer derrière les montagnes.",
					},
					{
						image: "img/038/day038_19.jpg",
						legend: "Pas de doute, on est en altitude !",
					},
					{
						image: "img/038/day038_20.JPG",
						legend: "Retour près du lac, mais de l'autre côté cette fois.",
					},
					{
						image: "img/038/day038_21.JPG",
						legend: "C'est du solide cette glace !",
					},
					{
						image: "img/038/day038_22.JPG",
						legend: "La démarquation est impressionnante...pourquoi cela gèle-t-il de cette façon ?",
					},
					{
						image: "img/038/day038_23.JPG",
						legend: "Une cabine privée, un peu avant la nôtre.",
					},
					{
						image: "img/038/day038_24.JPG",
						legend: "Enfin, Kamtjønnkoia !",
					},
					{
						image: "img/038/day038_25.JPG",
						legend: "We did it!",
					},
					{
						image: "img/038/day038_26.JPG",
						legend: "We've got the keys!",
					},
					{
						image: "img/038/day038_27.jpg",
						legend: "Un peu de pub.",
					},
					{
						image: "img/038/day038_28.jpg",
						legend: "Trop marrant ces bulles emprisonnées dans la glace, là encore je me demande comment c'est possible... Mais ça donne une idée de la profondeur.",
					},
					{
						image: "img/038/day038_29.jpg",
						legend: "Instant publicité encore...",
					},
					{
						image: "img/038/day038_30.jpg",
						legend: "Une dernière pour la route.",
					},
					{
						image: "img/038/day038_31.jpg",
						legend: "Tchou-tchou !",
					},
					{
						image: "img/038/day038_32.jpg",
						legend: "De retour sur le premier lac, vous l'aurez remarqué.",
					},
					{
						image: "img/038/day038_33.jpg",
						legend: "Heureusement que t'es là toi ! Nous réchauffer, nous faire à manger, rendre notre eau potable...autant de choses indispensables auxquelles on ne pense même pas d'habitude !",
					},
					{
						image: "img/038/day038_34.jpg",
						legend: "Thé (et bière ?) à la bougie.",
					},
					{
						image: "img/038/day038_35.JPG",
						legend: "Si si, c'est bien la Lune qui donne toute cette lumière.",
					},
					{
						image: "img/038/day038_36.JPG",
						legend: "La grande Ourse (enfin, surtout la casserole). Il y a trop de lumière pour observer les étoiles malheureusement.",
					},
					{
						image: "img/038/day038_37.JPG",
						legend: "La barque est prisonnière du lac !",
					},
					{
						image: "img/038/day038_38.JPG",
						legend: "Photo de groupe !",
					},
					{
						image: "img/038/day038_39.JPG",
						legend: "So fun!",
					},
					{
						image: "img/038/day038_40.JPG",
						legend: "La cabine en pleine nuit.",
					}
				]
			},
			{
				id: "39",
				title: "Toujours plus haut !",
				date: "16 octobre",
				html: [
					"Le lendemain matin, Florian entre dans la cabine pour nous réveiller. Je me lève ; il me propose d'aller voir le lever du soleil là où nous étions hier soir. Les couleurs rose orange sur la neige sont superbes. Nous prenons notre petit-déjeuner, faisons la vaisselle, puis nous lancons un défi : toutes les filles en sous-vêtements pour des photos déjantées sur le lac gelé. Il fait certes froid, mais ce n'est pas si terrible, on s'y fait. Une fois rhabillée, les photos font place à du patinage et à du curling humain ; grand moment de fou rire. Mais il nous faut partir si on veut profiter de la journée et ne pas rentrer trop tard.",
					"Le rangement de rigueur effectué, nous attaquons la montagne tout droit sans trop nous poser de questions. La montée est extrêmement difficile, ma tête dit 'vas-y tu peux le faire' quand mon corps dit 'arrête je n'en peux plus'. Heureusement tout le monde et patient est j'arriverai à monter aussi haut que les autres. Nous marchons le long de ce que nous croyons être une crête, les pieds dans la neige. La vue est magnifique de tout les côtés. Il y a là de nouveau un lac ; cette fois inutile de chercher de l'eau liquide sous la glace.",
					"Nous amorçons la descente, qui sera très pénible et traumatisante pour le corps. Mais nous profitons de la vue et du grand air et discutons tranquillement ; c'est ça être au présent. Dès que nous atteignons un endroit à l'abri du vent, nous mangeons. La rivière est plus gelée que la veille. J'imagine que nous avons eu beaucoup de chance ; cette cabine doit être très difficile d'accès lorsque le terrain est humide ou par temps neigeux. Ce qui explique que quelqu'un y soit mort (je fais bien de ne vous dire ça qu'après hein ?).",
					"La grande rivière retraversée, nous apercevons un groupe d'animaux. Des cerfs ? Des élans ? Non, c'est un troupeau de rennes ! Ils sont là, dans leur environnement naturel. Nous ne nous approchons pas de trop mais les observons un moment avant de redescendre. Puis nous longeons la rivière, replongeons dans les arbres, retraversons les ruisseaux - gelés cette fois.",
					"La voiture atteinte, nous repartons, heureux. Parce que, sans les clés, c'était loin d'être gagné ! Le trajet retour sera ponctué de conversations très intéressantes sur les différences culturelles : alimentation, éducation, langages, ce sont des sujets de notre quotidien qui sont abordés. Il ne fait nul doute que cette expérience modifiera nos habitudes pour toujours. Je rentre et m'écroule d'un sommeil bien mérité...après avoir aidé mes colocs à nettoyer l'appartement pour la vérification qui sera effectuée par SiT le lendemain matin."
				],
				images: [
					{
						image: "img/039/day038_41.JPG",
						legend: "Lever du soleil dans les montagnes.",
					},
					{
						image: "img/039/day038_42.JPG",
						legend: "Kamtjønnkoia se réveille doucement...",
					},
					{
						image: "img/039/day038_43.JPG",
						legend: "Ces couleurs, c'est dingue !",
					},
					{
						image: "img/039/day038_44.JPG",
						legend: "Ca passe au jaune maintenant.",
					},
					{
						image: "img/039/day038_45.JPG",
						legend: "La barque, toujours emprisonnée.",
					},
					{
						image: "img/039/day038_46.JPG",
						legend: "Séance de patinage.",
					},
					{
						image: "img/039/day038_47.JPG",
						legend: "Mon appareil est posé sur le lac.",
					},
					{
						image: "img/039/day038_48.JPG",
						legend: "Je suis encore impressionée de cette transparence, on voit sa propre ombre au fond de l'eau.",
					},
					{
						image: "img/039/day038_49.JPG",
						legend: "Curling humain !",
					},
					{
						image: "img/039/day038_50.JPG",
						legend: "Florian s'incruste sur la photo avec sa perceuse à glace, mais il n'arrivera pas à bout du lac.",
					},
					{
						image: "img/039/day038_51.JPG",
						legend: "La montée ayant été trop difficile pour prendre des photos, c'est au sommet que je prends les montagnes enneigées de l'autre côté.",
					},
					{
						image: "img/039/day038_52.jpg",
						legend: "Selfie : toujours en vie !",
					},
					{
						image: "img/039/day038_53.jpg",
						legend: "Apparemment, quelqu'un a une fonction panoramique.",
					},
					{
						image: "img/039/day038_54.JPG",
						legend: "Trop de publicité peut-être.",
					},
					{
						image: "img/039/day038_55.jpg",
						legend: "Le soleil dans les yeux !",
					},
					{
						image: "img/039/day038_56.jpg",
						legend: "C'est mieux dans ce sens-là.",
					},
					{
						image: "img/039/day038_57.JPG",
						legend: "On voit de nouveau le tout premier lac en bas.",
					},
					{
						image: "img/039/day038_58.JPG",
						legend: "Et on voit toujours les montagnes.",
					},
					{
						image: "img/039/day038_59.JPG",
						legend: "Ce lac là est vraiment gelé, mais Marjolaine s'y aventure quand même !",
					},
					{
						image: "img/039/day038_60.jpg",
						legend: "Et voilà ce qu'elle voit !",
					},
					{
						image: "img/039/day038_61.jpg",
						legend: "Bon ben à bientôt Marjo, bonnes glissades !",
					},
					{
						image: "img/039/day038_62.JPG",
						legend: "Le deuxième bras de la rivière est bien gelé aujourd'hui.",
					},
					{
						image: "img/039/day038_63.JPG",
						legend: "Courte pause ; le vent ne permet pas de s'arrêter longtemps.",
					},
					{
						image: "img/039/day038_64.JPG",
						legend: "La configuration du lieu vu de haut ! A gauche, le lac à moitié gelé. A droite, le lac gelé. Au milieu, une petite montagne qu'il faut contourner pour atteindre la cabine, cachée derrière. Sans doute pour la protéger du vent, bien qu'elle ait déjà été soufflée deux fois.",
					},
					{
						image: "img/039/day038_65.jpg",
						legend: "Oui oui je descend, mais il faut être prudent !",
					},
					{
						image: "img/039/day038_66.jpg",
						legend: "Sur la route du retour.",
					},
					{
						image: "img/039/day038_67.JPG",
						legend: "Des rennes !",
					},
					{
						image: "img/039/day038_68.JPG",
						legend: "Bon j'avoue j'ai triché avec le zoom, nous n'étions pas si près.",
					},
					{
						image: "img/039/day038_69.JPG",
						legend: "Le troupeau compte entre vingt et trente individus.",
					},
					{
						image: "img/039/day038_70.JPG",
						legend: "Les couleurs de pelage sont variées, et l'un d'entre eux semble marqué par un genre de collier-balise.",
					},
					{
						image: "img/039/day038_71.JPG",
						legend: "C'est drôle les souvenirs qu'on associe à une photo. Je sais par exemple que j'ai attendu que les écarts entre eux soit les mêmes pour appuyer sur le déclencheur. Et que Marjolaine nous racontait son expérience en Afrique du Sud.",
					},
					{
						image: "img/039/day038_72.JPG",
						legend: "Retour des arbres dans le paysage. Le bois potentiel est bien loin de la cabine !",
					},
					{
						image: "img/039/day038_73.jpg",
						legend: "Photo finish : avec les clés !",
					},
				]
			},
			{
				id: "40",
				title: "Retour à la réalité",
				date: "17, 18, 19, 20, 21, 22, 23 octobre",
				html: [
					"En me réveillant lundi matin, je regarde sur le tableau : c'est bon, SiT a validé notre nettoyage des espaces communs, nous n'aurons pas à payer le nettoyage, ouf !",
					"Le reste de la semaine est ponctué par le travail, j'ai un devoir à rendre mercredi et un autre vendredi. Par chance, les deux dates limite sont repoussées d'une semaine. Cela ne nous empêchera pas de passer nos journées entières dans les laboratoires remplis de norvégiens irrespectueux qui ouvrent la fenêtre malgré le froid, parlent très forts, et nous prennent de haut, nous les étranger qui n'y arrivons pas.",
					"Nous nous accordons une sortie en ville avec Marjolaine un soir de la semaine. J'achète un moule à gâteau, cela fera un peu de réconfort au milieu de tout ça ! Je suis aussi invitée à un before d'anniversaire jeudi. J'ai envie d'aller en soirée avec eux, mais ce n'est pas raisonnable, tant pis !",
					"Finalement le week-end arrive et avec lui des activités un peu plus sympa. J'inaugure mon moule avec un gâteau au chocolat que nous mangeons avec Marjolaine et Mathilde. S'en suit une discussion jusqu'à deux heures du matin, nous permettant de voir que nous avons toutes les mêmes inquiétudes vis-à-vis du monde et de l'avenir !",
					"Samedi, je me suis inscrite à un atelier de danse avec des professionnels. Ca vaut le coup ; le cours de danse contemporaine du matin est gé-nial et me laisse zen pour toute la journée. Le temps de rentrer (le studio est à l'autre bout de la ville), je n'ai que très peu de temps chez moi avant le cours de hip-hop de l'après-midi. Il s'avère bien plus difficile, mais le bilan de cette journée est positif. Elle constitue une pause efficace avant de reprendre le travail dimanche."
				],
				images: [
					{
						image: "img/040/day040_01.jpg",
						legend: "Le message laissé par SiT pour valider notre grand nettoyage d'automne !",
					},
					{
						image: "img/040/day040_02.jpg",
						legend: "La canelle, outil indispensable ici !",
					},
					{
						image: "img/040/day040_03.jpg",
						legend: "En période de travail intense, rien de tel que du pain perdu !",
					},
					{
						image: "img/040/day040_04.jpg",
						legend: "Expérience culinaire n°56 : Du jus de pomme pétillant.",
					},
					{
						image: "img/040/day040_05.jpg",
						legend: "Expérience culinaire n°57 : A 3€ la tablette de 100g, je comprends pourquoi le chocolat est un luxe ! Et encore le pâtissier est le moins cher.",
					},
					{
						image: "img/040/day040_06.jpg",
						legend: "Le gâteau au chocolat dans le four, mmmmmh !",
					}
				]
			},
			{
				id: "41",
				title: "Cuisine et changement d'heure",
				date: "24, 25, 26, 27, 28, 29, 30 octobre",
				html: [
					"La semaine est encore une fois très studieuse, du fait des devoirs à rendre mercredi, vendredi et dimanche. Il fait toujours beau en ce mois d'octobre...jusqu'au milieu de la semaine où cela se dégrade. Pas de chance, ce sont les vacances de la Toussaint et pas mal de français ont leurs copains/copines en visite !",
					"Je profite du week-end pour cuisiner à nouveau pour avoir du réconfort lors du travail dans la semaine. Dans la nuit de samedi à dimanche, c'est le changement d'heure. Je travaille jusqu'à deux heures du matin, en me disant 'chouette, il me reste un heure de sommeil de plus donc c'est comme s'il était seulement une heure'. Ce n'est qu'après que je découvre que le changement d'heure a déjà eu lieu ; j'ai donc travaillé jusqu'à trois heures. Le lendemain, je décide d'aller faire un tour près de l'église et du cimetière de Moholt. C'est plutôt une bonne idée parce qu'en cette période les tombes doivent être fleuries... Ce que je n'ai pas réalisé, c'est qu'avec le changement d'heure, il fait nuit à seize heures, et je me retrouve dans une situation plutôt glauque ! Il y a des lumières sur les tombes, ce qui est effectivement plus logique que des fleurs ici."
				],
				images: [
					{
						image: "img/041/day041_01.jpg",
						legend: "Petit zèbre va bien !",
					},
					{
						image: "img/041/day041_02.jpg",
						legend: "Réveillée une n-ième fois par le chantier.",
					},
					{
						image: "img/041/day041_03.jpg",
						legend: "Expérience culinaire n°58 : Le Kanelbolle de chez SiT, tout juste sorti du four. Ca aussi j'exporte !",
					},
					{
						image: "img/041/day041_04.jpg",
						legend: "Une pause photo, car l'automne c'est beau !",
					},
					{
						image: "img/041/day041_05.jpg",
						legend: "",
					},
					{
						image: "img/041/day041_06.jpg",
						legend: "",
					},
					{
						image: "img/041/day041_07.jpg",
						legend: "",
					},
					{
						image: "img/041/day041_08.jpg",
						legend: "",
					},
					{
						image: "img/041/day041_09.jpg",
						legend: "Tous les levers de soleil sont superbes. Et avec le changement d'heure, il devient plus facile de les voir ! Sur les trois personnes du chantier, deux sont des femmes.",
					},
					{
						image: "img/041/day041_10.jpg",
						legend: "A 'berry berry exciting taste'. De l'humour anglais...et pas de traduction en norvégien !",
					},
					{
						image: "img/041/day041_11.jpg",
						legend: "Ce tableau reste allumé toute la journée juste pour indiquer les bureaux des profs. Paradoxal dans le pays des voitures électriques, des bus, des vélos (et des skis à roulette).",
					},
					{
						image: "img/041/day041_12.jpg",
						legend: "Le soleil se lève encore (heureusement !).",
					},
					{
						image: "img/041/day041_13.jpg",
						legend: "",
					},
					{
						image: "img/041/day041_14.jpg",
						legend: "Cette fois c'est un gâteau pommme-cannelle qui cuit !",
					},
					{
						image: "img/041/day041_15.jpg",
						legend: "",
					},
					{
						image: "img/041/day041_16.jpg",
						legend: "L'arrivée de la pluie !",
					},
					{
						image: "img/041/day041_17.jpg",
						legend: "Moholt kirkegard.",
					},
					{
						image: "img/041/day041_18.jpg",
						legend: "Strinda kirke.",
					},
					{
						image: "img/041/day041_19.jpg",
						legend: "",
					},
					{
						image: "img/041/day041_20.jpg",
						legend: "",
					},
					{
						image: "img/041/day041_21.jpg",
						legend: "",
					},
					{
						image: "img/041/day041_22.jpg",
						legend: "Bizarre de voir un panneau par terre.",
					},
					{
						image: "img/041/day041_23.jpg",
						legend: "Les maisons éclairées sur la colline au loin, waouh !",
					},
					{
						image: "img/041/day041_24.jpg",
						legend: "Pâte brisée maison !",
					},
					{
						image: "img/041/day041_25.jpg",
						legend: "",
					},
					{
						image: "img/041/day041_26.jpg",
						legend: "Expérience culinaire n°59 : Ah, j'ai enfin trouvé de vrais lardons ! Ils sont très chers et très gras.",
					},
					{
						image: "img/041/day041_27.jpg",
						legend: "Expérience culinaire n°60 : Pas plus de goût que le précédent.",
					},
					{
						image: "img/041/day041_28.jpg",
						legend: "Vivement le retour du comté !",
					},
					{
						image: "img/041/day041_29.jpg",
						legend: "Tentative de torsades...",
					},
					{
						image: "img/041/day041_30.jpg",
						legend: "Quiche façon cratère !",
					},
					{
						image: "img/041/day041_31.jpg",
						legend: "'Not bad!'",
					}
				]
			},
			{
				id: "42",
				title: "Avant la tempête",
				date: "31 octobre, 1er, 2 novembre",
				html: [
					"La semaine s'annonçait une nouvelle fois studieuse, mais elle est heureusement marque par l'arrivée d'un colis de papa et d'Eloi ! Chouette !"
				],
				images: [
					{
						image: "img/042/day042_01.jpg",
						legend: "Ces claviers norvégiens nous donnent du fil à retordre !",
					},
					{
						image: "img/042/day042_02.jpg",
						legend: "Ah ah, j'ai hâte d'être à ce soir pour le récupérer !",
					},
					{
						image: "img/042/day042_03.jpg",
						legend: "J'ai rarement été aussi excitée à l'idée d'ouvrir un paquet !",
					},
					{
						image: "img/042/day042_04.jpg",
						legend: "Tout est bien protégé !",
					},
					{
						image: "img/042/day042_05.jpg",
						legend: "Il y en a qui se sont bien amusés !",
					},
					{
						image: "img/042/day042_06.jpg",
						legend: "Je n'ai pas pu résister à tout ouvrir et à faire une photo générale, mais promis, je ne mangerai pas tout d'un coup ! J'ai même pu lire le journal !",
					},
					{
						image: "img/042/day042_07.jpg",
						legend: "Ciel bleu mais feuilles d'automnes...",
					},
					{
						image: "img/042/day042_08.jpg",
						legend: "A seize heures, le soleil se couche déjà, donnant cette jolie couleur !",
					},
					{
						image: "img/042/day042_09.jpg",
						legend: "Expérience culinaire n°61 : Test comparatif de brunost ! Le gagnant sera-t-il pur lait de vache ou moitié lait de chèvre ?",
					},
					{
						image: "img/042/day042_10.jpg",
						legend: "Pour que vous voyez à quoi ça ressemble.",
					},
					{
						image: "img/042/day042_11.jpg",
						legend: "Expérience culinaire n° 62 : Les produits pour Jul, les festivités de début décembre, sont déjà en magasin ! Ces bâtonnets à l'amande en font partie.",
					},
					{
						image: "img/042/day042_12.jpg",
						legend: "Expérience culinaire n° 63 : Des petits briques de lait au chocolat vendues un peu partout, y compris dans les cafétérias du campus. Et déjà déguisées pour décembre.",
					}
				]
			},
			{
				id: "43",
				title: "Il neige à Trondheim !",
				date: "3 novembre",
				html: [
					"Quand j'ouvre les rideaux ce matin, je constate qu'il neige ! Sans me poser une seconde la question, je vais quand même prendre le bus, qui arrive parfaitement à l'heure. Marjolaine et moi décidons d'aller nous promener pour voir la ville sous la neige. Un stand de l'association des cyclistes de Norvège donne des lumières pour le vélo de Marjolaine et une bande réfléchissante pour moi. Avec la nuit qui tombe tôt et les lumières des rues, cette journée fait très esprit de Noël ! En rentrant, je constate que tous les habitants de Moholt s'en sont donné à coeur joie ; des bonhommes de neige ont poussé partout. Dans la soirée, je recevrai des boules dans ma fenêtre, ce qui m'obligera à descendre me battre avec les autres."
				],
				images: [
					{
						image: "img/043/day043_01.jpg",
						legend: "La vue de ma fenêtre au réveil.",
					},
					{
						image: "img/043/day043_02.jpg",
						legend: "Et de celle de la cuisine.",
					},
					{
						image: "img/043/day043_03.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_04.jpg",
						legend: "Timelapse...",
					},
					{
						image: "img/043/day043_05.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_06.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_07.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_08.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_09.jpg",
						legend: "Ca ne vous chiffone pas, vous, cette plaque d'égout qui ne s'enneige pas ?",
					},
					{
						image: "img/043/day043_10.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_11.jpg",
						legend: "Séance photo pour mon CV. D'évidence ce ne sera pas celle-ci. Tu me cherches recruteur ?",
					},
					{
						image: "img/043/day043_12.jpg",
						legend: "Quelques centimètres en début d'après-midi déjà !",
					},
					{
						image: "img/043/day043_13.jpg",
						legend: "Mon immeuble !",
					},
					{
						image: "img/043/day043_14.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_15.jpg",
						legend: "Automne ou hiver ?",
					},
					{
						image: "img/043/day043_16.jpg",
						legend: "Parée pour le froid !",
					},
					{
						image: "img/043/day043_17.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_18.jpg",
						legend: "Il en faudra plus pour arrêter les bus !",
					},
					{
						image: "img/043/day043_19.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_20.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_21.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_22.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_23.jpg",
						legend: "Automne ou hiver ?",
					},
					{
						image: "img/043/day043_24.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_25.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_26.jpg",
						legend: "Gløshaugen !",
					},
					{
						image: "img/043/day043_27.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_28.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_29.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_30.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_31.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_32.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_33.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_34.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_35.jpg",
						legend: "Un peu de pub...",
					},
					{
						image: "img/043/day043_36.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_37.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_38.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_39.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_40.jpg",
						legend: "Au risque de me répéter, automne ou hiver ?",
					},
					{
						image: "img/043/day043_41.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_42.jpg",
						legend: "Ca y est, la nuit tombe...",
					},
					{
						image: "img/043/day043_43.jpg",
						legend: "Hiiii !",
					},
					{
						image: "img/043/day043_44.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_45.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_46.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_47.jpg",
						legend: "J'ai froid brrr !",
					},
					{
						image: "img/043/day043_48.jpg",
						legend: "La cathédrale !",
					},
					{
						image: "img/043/day043_49.jpg",
						legend: "Et son cimetière.",
					},
					{
						image: "img/043/day043_50.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_51.jpg",
						legend: "Ce pont près de Bakklandet, qu'on aime aller voir et revoir...",
					},
					{
						image: "img/043/day043_52.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_53.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_54.jpg",
						legend: "C'est presque Noël !",
					},
					{
						image: "img/043/day043_55.jpg",
						legend: "On peut acheter des patins à glace dans n'importe quel magasin de sport.",
					},
					{
						image: "img/043/day043_56.jpg",
						legend: "Ainsi que des skis, et des luges d'une qualité bien supérieure à celles qu'on trouve en France !",
					},
					{
						image: "img/043/day043_57.jpg",
						legend: "Retour sur le premier pont. La nuit est tombée ; la forteresse et la tour de Tyholt surplombent toujours la ville.",
					},
					{
						image: "img/043/day043_58.jpg",
						legend: "Il y a même des stalactites par endroits !",
					},
					{
						image: "img/043/day043_59.jpg",
						legend: "Dans la série 'concepts inexportables', ces chaussures en vrac dans l'entrée des vestiaires. On ne marche pas avec ses chaussures d'extérieur à l'intérieur, et on est sûr de retrouver ses chaussures en sortant !",
					},
					{
						image: "img/043/day043_60.jpg",
						legend: "Une pub avec l'aide de Kygo !",
					},
					{
						image: "img/043/day043_61.jpg",
						legend: "Une armada de bonhommes de neige !",
					},
					{
						image: "img/043/day043_62.jpg",
						legend: "",
					},
					{
						image: "img/043/day043_63.jpeg",
						legend: "Celui de Maxime, à l'effigie de l'ENSEA !",
					},
					{
						image: "img/043/day043_64.jpg",
						legend: "Et cette fameuse plaque d'égout qui doit être chauffée...",
					},
				]
			},
			{
				id: "44",
				title: "Après la tempête",
				date: "4, 5, 6, 7 novembre",
				html: [
					"La vie reprend son cours après une parenthèse enneigée. Le froid et l'arrivée des évaluations de projet et des examens rend tout le monde bien moins actif !"
				],
				images: [
					{
						image: "img/044/day044_01.jpg",
						legend: "Le beau temps est parti, mais la neige est toujours là !",
					},
					{
						image: "img/044/day044_02.jpg",
						legend: "",
					},
					{
						image: "img/044/day044_03.jpg",
						legend: "",
					},
					{
						image: "img/044/day044_04.jpg",
						legend: "",
					},
					{
						image: "img/044/day044_05.jpg",
						legend: "",
					},
					{
						image: "img/044/day044_06.jpg",
						legend: "",
					},
					{
						image: "img/044/day044_07.jpg",
						legend: "",
					},
					{
						image: "img/044/day044_08.jpg",
						legend: "Grosse fatigue.",
					},
					{
						image: "img/044/day044_09.jpg",
						legend: "",
					},
					{
						image: "img/044/day044_10.jpg",
						legend: "Pas de batteur ? Utilise tes bras !",
					},
					{
						image: "img/044/day044_11.jpg",
						legend: "Des meringues.",
					},
					{
						image: "img/044/day044_12.jpg",
						legend: "Expérience culinaire n° 64 : Enfin une bonne baguette ! Je ne l'ai trouvée qu'une fois.",
					},
					{
						image: "img/044/day044_13.jpg",
						legend: "",
					},
					{
						image: "img/044/day044_14.jpg",
						legend: "Timelapse again !",
					},
					{
						image: "img/044/day044_15.jpg",
						legend: "",
					},
					{
						image: "img/044/day044_16.jpg",
						legend: "",
					},
					{
						image: "img/044/day044_17.jpg",
						legend: "Expérience culinaire n° 65 : Un 'fromage' norvégien très bizarre.",
					}
				]
			},
			{
				id: "45",
				title: "Gratulerer med dagen!",
				date: "8 novembre",
				html: [
					"Je me réveille aujoud'hui et m'autorise à attaquer ce que je n'ai pas encore déballé de mon colis. Après un bon petit-déjeuner, je me rends au labo comme tous les mardis. Marjolaine arrive, armée d'un Toblerone qu'elle m'offre comme cadeau, trop chou !",
					"A midi j'ai prévu une part de quiche pour moi, et des meringues à partager, pour continuer sur la lancée de nourriture française ! Marjolaine organise un truc pour ce soir.",
					"En rentrant, mes deux colocs allemands me souhaitent chaleureusement mon anniversaire. Je mange encore des produits français avant d'aller chez Marjolaine. On fait ensemble un gâteau au chocolat que l'on déguste avec ses colocs et les autres Enséarques. Les filles ont même prévu les bougies, c'est trop gentil ! J'ai apporté des carambars, qui sont français, les autres ne connaissent pas ! Ce n'est pas facile d'expliquer des blagues principalement à base de jeux de mots.",
					"Quand je retourne chez moi je trouve mes colocs qui jouent au 'Doppelkopf' avec leurs potes. Je leur avais donné des carambars en partant et ils n'ont déchiffré qu'une blague. Leur jeu a l'air compliqué !"
				],
				images: [
					{
						image: "img/045/day045_01.jpg",
						legend: "Un bon petit-déjeuner français pour fêter mon anniversaire !",
					},
					{
						image: "img/045/day045_02.jpg",
						legend: "Le Toblerone de Marjo ! Que de cadeaux alimentaires !",
					},
					{
						image: "img/045/day045_03.jpg",
						legend: "Et ensuite, une longue journée de projet...",
					},
					{
						image: "img/045/day045_04.jpg",
						legend: "Puis une assiette de dégustation française. Merci encore papa !",
					},
					{
						image: "img/045/day045_05.jpg",
						legend: "La blague préférée des Enséarques !",
					},
					{
						image: "img/045/day045_06.jpg",
						legend: "Et pour finir, un super gâteau ! Merci Marjo ! Et merci aux autres bien sûr.",
					}
				]
			},
			{
				id: "46",
				title: "Show must go on!",
				date: "9, 10, 11, 12, 13, 14, 15, 16 novembre",
				html: [
					"Cette semaine n'est pas seulement celle de mon anniversaire, c'est aussi celle des derniers cours de danse avant le spectacle ! Mercredi, on fait les derniers ajustements en danse contemporaine, et jeudi en hip-hop. Ensuite, j'ai organisé un repas avec Marjolaine, Mathilde et mon coloc Pascal. Toasts au pâté, saucisse sèche, quiche lorraine, fromage français apporté par Marjo, salade de fruits à la crème fraîche préparée par Pascal et Michele (qui a tenu à participer même s'il n'a pas mangé avec nous) et crumble pomme-banane de Marjo ; un repas au top ! La soirée se finit quand Michele (qui nous a rejoint) et Pascal partent en soirée.",
					"Samedi, c'est la journée de répétition au studio de danse Nyhavna, de l'autre côté de la ville. Comme pour l'atelier d'octobre, pas de bol : un cours est à midi et l'autre à cinq heures, ce qui me laisse très peu de temps chez moi entre les deux ! Alors que le cours du matin dure une heure, celui de l'après-midi en nécessitera deux et demie. Mais au moins, on est au point !",
					"Mardi, c'est la dernière séance de projet avant l'évaluation. Nous arrivons à faire un système qui marche même si le projet n'est pas terminé. Les norvégiens et leur bruit en travaillant nous épuisent, vivement la fin !",
					"A quinze heures trente il me faut partir pour la répétition générale à Studentersamfundet. Le rendez-vous est à seize heures pour démarrer à seize heures trente. Je pensais que trois heures suffiraient, mais je suis loin du compte. La salle est remplie de danseurs, et je comprends que nous ne pourrons pas assister au spectacle le jour J. Il y a trente danses ! Elle sont d'abord exécutées toutes une fois, en prenant le temps que chacun mémorise ses placements. Certaines sont tellement belles qu'elles me font pleurer, d'autres sont à éclater de rire. Puis Lars, mon instructeur de hip-hop, apprend à tout le monde la danse finale. Enfin nous faisons la répétition générale dans l'ordre avec les lumières. L'ensemble s'achèvera à vingt-deux heures trente et je suis bien contente de rentrer enfin.",
					"Mercredi, je me lève tard, n'ai pas le temps de faire grand chose, puis me prépare pour le show. Sur place, on fait un dernier ajustement des placements, puis tous les danseurs se retranchent dans les vestiaires, où il faut être le plus silencieux possible. J'emprunte les éléments de costume dont j'ai besoin pour le hip-hop, me maquille pour ne pas paraître pâle sous les lumières, et c'est parti ! Je fais une grosse erreur et ai du mal à sourire avec le stress, mais je me suis amusée. Même chose en danse contemporaine, où nous sommes plusieurs à faire de petites erreurs. Finalement je profite de la danse finale avant de rentrer. Apparemment, le public a apprécié l'ensemble.",
					"Jeudi, même journée à cela près que je remets enfin mon blog au présent ! C'est l'autre groupe qui danse le hip-hop cette fois, donc je dois attendre un moment avant de danser. Cette fois je fais tout sans erreur. C'est incroyable de se sentir appartenir à un tout, un si grand groupe de danseurs, un si grand spectacle. Et pourtant la prestation va si vite ! Je fais la danse finale et je rentre ; le défi de suivre des cours de danse en anglais et en norvégien est réussi !"
				],
				images: [
					{
						image: "img/046/day046_01.jpg",
						legend: "J'ai déplacé mon bureau !",
					},
					{
						image: "img/046/day046_02.jpg",
						legend: "Ah bon, ça existe les centimes ici ?!",
					},
					{
						image: "img/046/day046_03.jpg",
						legend: "Un gratin dauphinois maison, cool ! (Je marche sur les plates-bandes de tata Sophie)",
					},
					{
						image: "img/046/day046_04.jpg",
						legend: "Eh oui, vélo et neige ne font pas bon ménage ! Pourtant, il y en a encore beaucoup en ville.",
					},
					{
						image: "img/046/day046_05.jpg",
						legend: "L'église de jour !",
					},
					{
						image: "img/046/day046_06.jpg",
						legend: "Noël is coming !",
					},
					{
						image: "img/046/day046_07.jpg",
						legend: "La panoplie de l'hiver : carte de bus et bande réfléchissante.",
					},
					{
						image: "img/046/day046_08.jpg",
						legend: "Même le lait a pris un air de Noël",
					},
					{
						image: "img/046/day046_09.jpg",
						legend: "",
					},
					{
						image: "img/046/day046_10.jpg",
						legend: "Le projet final...",
					},
					{
						image: "img/046/day046_11.jpg",
						legend: "Si si c'est bien rangé !",
					},
					{
						image: "img/046/day046_12.jpg",
						legend: "Les danseurs remplissent la salle lors de la répét...",
					},
					{
						image: "img/046/day046_13.jpg",
						legend: "Expérience culinaire n°66 : Des Granola norvégiens !",
					},
					{
						image: "img/046/day046_14.jpg",
						legend: "Expérience culinaire n°67 : Des oignons frits...",
					},
					{
						image: "img/046/day046_15.jpg",
						legend: "Expérience culinaire n°68 : Des pains à hot-dogs...",
					},
					{
						image: "img/046/day046_16.jpg",
						legend: "Expérience culinaire n°69 : Et des saucisses ! La panoplie hot-dogs parfaite !",
					},
					{
						image: "img/046/day046_17.jpg",
						legend: "Le planning du show !",
					},
					{
						image: "img/046/day046_18.jpg",
						legend: "A seize heures, il fait déjà presque nuit. Les restes de coucher de soleil sont visibles dans la fenêtre en face.",
					},
					{
						image: "img/046/day046_19.jpg",
						legend: "Retour sur le début d'année : le groupe de hip-hop !",
					},
					{
						image: "img/046/day046_20.jpg",
						legend: "Placement du groupe de danse contemporaine !",
					},
					{
						image: "img/046/day046_21.jpg",
						legend: "Le groupe après ! (Je suis déjà prête pour ma danse suivante)",
					},
					{
						image: "img/046/day046_22.jpg",
						legend: "La danse finale...",
					},
					{
						image: "img/046/day046_23.jpg",
						legend: "...et encore !",
					},
					{
						image: "img/046/day046_24.jpg",
						legend: "Les coulisses jeudi !",
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
