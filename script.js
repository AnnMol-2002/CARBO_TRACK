window.logout = function() {
	fetch('/~/projects/login-system/logout', { method: 'POST'});
	alert('Logged Out!')
	location.href = '/~/projects/login-system'
}
function f(){
}