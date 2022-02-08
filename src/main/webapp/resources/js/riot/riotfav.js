
var member_id = $('#id').val();
var nickname = $('#nickname').val();
var summonerId = $('#summonerId').val();





$(".fav-btn").click((e) => {

	console.log(id);
	

	var favData = {
		member_id: member_id,
		summoner_id: summonerId

	};

	const csrfToken = $("meta[name='_csrf']").attr("content");
	const csrfHeader = $("meta[name='_csrf_header']").attr("content");
	const headers = {};
	headers[csrfHeader] = csrfToken;

	$.ajax({
		type: "post",
		headers: headers,
		url: '/nadaum/riot/riotFav.do',
		dataType: "json",
		contentType: "application/json; charset=utf-8;",
		data: JSON.stringify(
			favData
		),
		success: function(response) {
				alert("이 소환사가 계정에 즐겨찾기 되었습니다!");
		
		},
		error: function(response) {
			console.log("실패");
		}
	});

});

