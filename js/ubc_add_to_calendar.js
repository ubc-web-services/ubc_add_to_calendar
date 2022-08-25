
(function (Drupal) {
	Drupal.behaviors.ubcAddToCalendar = {
	  attach(context, settings) {
		document.getElementById("add-to-cal").onchange = function() {
			if (this.selectedIndex!==0) {
				window.open(this.value, '_blank');
			}
		};
	  },
	};
  })(Drupal);
