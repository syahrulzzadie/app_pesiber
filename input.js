function input(){
	var nama = $('#nama').val();
	var raport = $('#raport').val();
	var absensi = $('#absensi').val();
	var sikap = $('#sikap').val();
	var ekstra = $('#ekstra').val();
	if(nama == "" || raport == "" || absensi == "" || sikap == "" || ekstra == "")
	{
		alert("Form tidak boleh kosong");
	}
	else
	{
		$.ajax({
			url : 'http://jokerman17.twomini.com/app_pesiber/ajax.php',
			type : 'POST',
			data : 'tipe=input&nama='+nama+'&raport='+raport+'&absensi='+absensi+'&sikap='+sikap+'&ekstra='+ekstra,
			success : function (msg) {
				if(msg == 'sukses')
				{
					window.location.href = "rangking.html";
				}
				else
				{
					alert("Siswa gagal ditambahkan!");
				}
			},
		});
	}
}
