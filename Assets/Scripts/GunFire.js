import UnityEngine.SceneManagement;

var Flash : GameObject;

function Start () {

}

function Update () {
if (GlobalAmmo.LoadedAmmo >=1) {
	if(Input.GetButtonDown("Fire1")) {
		var gunsound : AudioSource = GetComponent.<AudioSource>();
		gunsound.Play();
		Flash.SetActive(true);
		MuzzleOff();
		GetComponent.<Animation>().Play("GunShot");
		GlobalAmmo.LoadedAmmo -= 1;
		}

		else
		if (GlobalAmmo.LoadedAmmo <= 1){
		if (GlobalAmmo.CurrentAmmo <= 1){
		Invoke("ResetGame",5);
   }
   }
}
}

function ResetGame(){
SceneManager.LoadScene(3);
}

function MuzzleOff () {

yield WaitForSeconds(0.1);
Flash.SetActive(false);

}