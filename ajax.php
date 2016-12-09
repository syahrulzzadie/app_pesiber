<?php
if(isset($_POST['tipe']))
{
	$dbhost = 'localhost';
	$dbuser = 'root';
	$dbpass = '';
	$dbname = 'app_pesiber';	
	$db = new mysqli($dbhost,$dbuser,$dbpass,$dbname);
	
	$nama = isset($_POST['nama']) ? $_POST['nama']: NULL;
	$raport = isset($_POST['raport']) ? $_POST['raport']: NULL;
	$absensi = isset($_POST['absensi']) ? $_POST['absensi'] : NULL;
	$sikap = isset($_POST['sikap']) ? $_POST['sikap'] : NULL;
	$ekstra = isset($_POST['ekstra']) ? $_POST['ekstra'] : NULL;
	
	if($_POST['tipe']=='input')
	{
		$hasil = ($raport + ($absensi/3) + ($sikap/5) + ($ekstra/7))/4;
		$db->query("INSERT INTO `siswa` (`nama`, `raport`, `absensi`, `sikap`, `ekstra`, `hasil`)
					VALUES ('$nama', '$raport', '$absensi', '$sikap', '$ekstra', '$hasil');");
		if($db->errno)
			echo 'gagal';
		else
			echo 'sukses';
	}
	if($_POST['tipe']=='select')
	{
		$result = $db->query("select * from siswa order by hasil asc");
		$siswa = array();
		while($data = $result->fetch_assoc())
		{
			$siswa['siswa'][] = $data;
		}
		echo json_encode($siswa);
	}
}
else
	echo 'Halaman tidak ditemukan!';




?>