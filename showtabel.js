$(document).ready(function(){
	$.ajax({
		url : 'http://localhost/app_pesiber/ajax.php',
		type : 'POST',
		data : 'tipe=select',
		success : function (msg) {
			var siswa = JSON.parse(msg);
			if(msg == 'gagal')
			{
				alert("Data siswa kosong!");
			}
			else
			{
				for(i=0;i<siswa.siswa.length;i++)
				{
					var tabel = document.getElementById('tabel').insertRow(0);
					var baris1 = tabel.insertCell(0).innerHTML = siswa.siswa[i].nama;
					var baris2 = tabel.insertCell(1).innerHTML = siswa.siswa[i].raport;
					var baris3 = tabel.insertCell(2).innerHTML = siswa.siswa[i].absensi;
					var baris4 = tabel.insertCell(3).innerHTML = siswa.siswa[i].sikap;
					var baris5 = tabel.insertCell(4).innerHTML = siswa.siswa[i].ekstra;
					var baris6 = tabel.insertCell(5).innerHTML = siswa.siswa[i].hasil;
				}
			}
		},
	});
});