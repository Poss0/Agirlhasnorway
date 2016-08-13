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
					"C'est l'heure de faire des courses plus conséquentes. J'achète des produits en provenance de Norvège : des pommes de terre, des carottes, des gâteaux. Il faut tenter. Au moment d'acheter du beurre, réflexion : Lekkmargarin, qui signifie littéralement 'margarine de lait', correspond-il à du beurre ? Il s'avèrera que non, je l'ai appris à mes dépends en y goûtant après en avoir mis dans la poële. Pour les pommes de terre, c'est sans conséquence, mais pour les tartines, j'ai un doute.",
					"",
					"On passe la fin de soirée chez Maxime, où l'on apprend entre autres que les oeufs sont blancs parce que les poules qui es font ne sont pas les mêmes que chez nous. Celles qui font des oeufs blancs se reproduisent plus vite et demandent moins de nourriture, c'est pourquoi ils sont répandus.",
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
