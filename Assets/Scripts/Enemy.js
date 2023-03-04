var EnemyHealth : int = 5;

function DeductPoints (DamageAmount : int) {
	EnemyHealth -= DamageAmount;
}

function Update () {
	if (EnemyHealth <= 0) {
		Destroy(gameObject);
	}
}