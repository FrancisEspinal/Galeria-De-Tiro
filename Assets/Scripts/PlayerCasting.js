static var DistanceFromTarget : float;

var ToTarget : float; //que tan lejos esta del objetivo


function Update () {
	var hit : RaycastHit;
		if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit)) {
			ToTarget = hit.distance;
			DistanceFromTarget = ToTarget;		
		}
}