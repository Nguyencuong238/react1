$(document).ready(function(){

	$('#dangnhap, #dangky').click(function(){

		// hien cua so  dang nhap dang ky 
		$('#modal').removeClass('unactive').addClass('active');

		// an 2 nut dang nhap
		$('#giaodien').removeClass('active').addClass('unactive');
	})
	$('#dangky').click(function(){
		$('#log').removeClass('active');
		$('#sign').addClass('active');
	})

	$('#hide').click(function(){
		$('#modal').removeClass('active').addClass('unactive');
		$('#giaodien').removeClass('unactive').addClass('active');
	})
	
})