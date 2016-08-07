// ----------------------------------------------------------
// input ��Ŀ���ѱ�� (�ֹι�ȣ,��ȭ��ȣ)
// ----------------------------------------------------------
function next_input(h,nextnum,nextinput){
	var f = h.form;
	if(h.value.length >= nextnum){
		f.elements[nextinput].focus(); 
	}		
}


// ----------------------------------------------------------
// ���� 3�ڸ� �����
// ----------------------------------------------------------
function money_format(n){
	var str = (n<0)? "-": "";
	var s = (n<0)? -n+"": n+"";
	var len = s.length;
	for(var i=0; i<len; i++){
		str += s.charAt(i);
		var j = len-i;
		if(j>1 && j%3==1)
			str +=",";
	}
	return str;
}


// ----------------------------------------------------------
// �ֹ��ѱ��
// ----------------------------------------------------------
function order_end(form_name){
	form_name.ps_mode.value = "write";
	form_name.action = "m_userinfo_ok.php";
	form_name.submit();
	return true;
}

function order_back(form_name){
	form_name.ps_mode.value = "back";
	form_name.action = "m_userinfo.php";
	form_name.submit();
	return true;
}

// ----------------------------------------------------------
// �̸��ϰ���
// ----------------------------------------------------------
function isEmail(s){
  var str = s.search(/^\s*[\w\~\-\.]+\@[\w\~\-]+(\.[\w\~\-]+)+\s*$/g);
  return str;
}


// ----------------------------------------------------------
// �����ȣ
// ----------------------------------------------------------
function openzipcode1() {
    window.open("zipcode/juso.php?form=morning&zip1=zip1&zip2=zip2&address=address1&english_address=english_address","zipwin","width=520,height=260,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars,resizable=no");
}

function openzipcode2() {
//    window.open("zipcode/juso.php?form=morning&zip1=zip3&zip2=zip4&address=address2&address=address1&english_address=english_address","zipwin","width=520,height=260,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars,resizable=no");
			window.open("zipcode/juso2.php?form=morning&zip1=zip3&zip2=zip4&address=address2&english_address=english_address","zipwin","width=520,height=260,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars,resizable=no");
}


// ----------------------------------------------------------
// ���̵� �ߺ� �˻�
// ----------------------------------------------------------
function openoverlap() {
    var m=document.morning;

    if (m.id.value == "") {
        alert("ID�� �ʼ� ���� �Դϴ�. �Է��� �ּ���.");
        m.id.focus();
        return false;
    }

    if ((m.id.value.length < 6) || (m.id.value.length > 16)) {
        alert("ID�� 6���� �̻�, 16���� �����̿��� �մϴ�.");
        m.id.focus();
        return false;
    }
    window.open("m_overlap.php?form=morning&focus=id&muid="+m.id.value,"overlap","width=420,height=250,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no");
}


// ----------------------------------------------------------
// �Է�â �ø���
// ----------------------------------------------------------
function zoomform(zooms){
    if(navigator.appName == 'Netscape') {
        alert("[�Է�â �ø���]��\n\n�ͽ��÷�4.0 �̻��� �������� ����ؾ�\n\n��� ������ ��ɹ�ư�Դϴ�.\n\n�׽������������� �̿��� �� �����ϴ�.");
        return;
    }

    zooms.rows = zooms.rows+5;

    //if(zooms.rows == 3){zooms.rows =  10;}
    //else if(zooms.rows == 10){zooms.rows =  20;}
    //else if(zooms.rows == 15){zooms.rows =  20;}
    //else if(zooms.rows == 20){zooms.rows =  30;}
    //else if(zooms.rows == 30){zooms.rows =  40;}
    //else {zooms.rows =  3;}
}

function zoomform2(n){
	if($("#"+n).css("height") == "488px"){
		$("#"+n).css("height","100");
	}else{
		$("#"+n).css("height","500");
	}
}

// ----------------------------------------------------------
// �̹��� �˾�â
// ----------------------------------------------------------
function show_image(uid,img,width,height) {
    newWin = window.open("m_show_image.php?image="+img+"&uid="+uid,"show","width="+width+",height="+height+",top=50,left=130,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no");
}

function show_mall_image(uid,img,width,height) {
    newWin = window.open("m_show_image.php?image="+img+"&uid="+uid,"show","width="+width+",height="+height+",toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no");
}

function show_board_image(img,width,height) {
    newWin = window.open("m_show_board_image.php?image="+img,"show","width="+width+",height="+height+",toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no");
}

var p_sel_num = 0;
function select_radio(num) {
   p_sel_num =  num;
}


// ----------------------------------------------------------
// ��ǥ
// ----------------------------------------------------------
function submit_vote() {
   if (p_sel_num == 0) {
      alert('���� �����߿��� 1���� �����Ͻ��� [��ǥ] ��ư�� �����ּ���.');
      return;
   }
   winopen("m_poll_vote.php?num="+p_sel_num,"��������",500,500);
}

function view_vote() {
   winopen("m_poll_view.php?","��������",500,500);
}


// ----------------------------------------------------------
// ��â��Ķ���
// ----------------------------------------------------------
function winopen(url,title,w,h) {
		newwin = window.open(url,title,"toolbar=0,location=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=" + w + ",height=" + h + ",alwaysRadised=0");
		newwin.focus();
}


// ----------------------------------------------------------
// ���� �α��� �κ�
// ----------------------------------------------------------
function check_main_login() {
    var m=document.morning_main_login;

	//alert(m.ps_murl.value);
	if(m.ps_ssl.value == 1 && m.ps_murl.value)
	{
		m.action = m.ps_murl.value;
	}

    if (m.login_id.value.length == "") {
       alert("���̵� �Է��Ͽ� �ּ���");
       m.login_id.focus();
       return false;
    }

    if (m.login_pass.value.length == "") {
       alert("�н����带 �Է��Ͽ� �ּ���");
       m.login_pass.focus();
      return false;
    }

}


// ----------------------------------------------------------
// ���� �α��� �κ�
// ----------------------------------------------------------
function check_left_login() 
{
    var m=document.morning_left_login;

	//alert(m.ps_murl.value);
	if(m.ps_ssl.value == 1 && m.ps_murl.value)
	{
		m.action = m.ps_murl.value;
	}

    if (m.login_id.value.length == "") 
	{
        alert("���̵� �Է��Ͽ� �ּ���");
        m.login_id.focus();
        return false;
    }

    if (m.login_pass.value.length == "") 
	{
        alert("�н����带 �Է��Ͽ� �ּ���");
        m.login_pass.focus();
       return false;
    }
}


// ----------------------------------------------------------
// ȸ�� ���̵� ã�� �н����� ã��
// ----------------------------------------------------------
function check_member_loss() {
    var m=document.morning_loss;

	if(m.ps_ssl.value == 1 && m.ps_murl.value)
	{
		m.action = m.ps_murl.value;
	}

    if ("undefined" != typeof m.loss_id){
		if (m.loss_id.value.length == "") {
		   alert(" ���̵� �Է��Ͽ� �ֽʽÿ�. ");
		   m.loss_id.focus();
		   return false;
		}
	}

    if (m.loss_name.value.length == "") {
       alert(" �̸��� �Է��Ͽ� �ֽʽÿ�. ");
       m.loss_name.focus();
       return false;
    }

    if (m.loss_email.value.length == "") {
       alert(" �̸����ּҸ� �Է��Ͽ� �ֽʽÿ�. ");
       m.loss_email.focus();
      return false;
    }

}


// ----------------------------------------------------------
// ȸ�� Ż��
// ----------------------------------------------------------
function check_member_delete() {
    var m=document.morning_delete;

    if (m.del_id.value.length == "") {
       alert(" ���̵� �Է��Ͽ� �ֽʽÿ�. ");
       m.del_id.focus();
       return false;
    }

    if (m.del_pass.value.length == "") {
       alert(" �н����带 �Է��Ͽ� �ֽʽÿ�. ");
       m.del_pass.focus();
      return false;
    }

    if (m.del_name.value.length == "") {
       alert(" �̸��� �Է��Ͽ� �ֽʽÿ�. ");
       m.del_name.focus();
       return false;
    }

    if (m.del_email.value.length == "") {
       alert(" �̸����� �Է��Ͽ� �ֽʽÿ�. ");
       m.del_email.focus();
      return false;
    }

}


// ----------------------------------------------------------
// ������ ��ġ
// ----------------------------------------------------------
function check_top_search() {
    var m=document.morning_top_search;

    if (m.ps_search.value.length == "") {
       alert("�˻�� �Է��Ͽ� �ֽʽÿ�");
       m.ps_search.focus();
       return false;
    }
}


// ----------------------------------------------------------
// ��â ���� �⺻ ��ũ��Ʈ
// ----------------------------------------------------------
function open_window(name, url, left, top, width, height, toolbar, menubar, statusbar, scrollbar, resizable)
{
  toolbar_str = toolbar ? 'yes' : 'no';
  menubar_str = menubar ? 'yes' : 'no';
  statusbar_str = statusbar ? 'yes' : 'no';
  scrollbar_str = scrollbar ? 'yes' : 'no';
  resizable_str = resizable ? 'yes' : 'no';

  newWin= window.open(url, name, 'left='+left+',top='+top+',width='+width+',height='+height+',toolbar='+toolbar_str+',menubar='+menubar_str+',status='+statusbar_str+',scrollbars='+scrollbar_str+',resizable='+resizable_str);
}


// ----------------------------------------------------------
// ȸ�� ��� Ȯ�� ��
// ----------------------------------------------------------
function check_license_submit() {
	if(!document.license.accept.checked) {
		alert("[ȸ�� ��� �� �������� ��ȣ��å] ��\n\n�����ð� �����Ͻô� �и� ȸ�� ������ �ϽǼ� �ֽ��ϴ�..\n\n��� �������� �����Ͻø� üũ�� �Ͻ��� ȸ�� �����Ͽ� �ּ���");
		return false;
	}
	return true;
}


// ----------------------------------------------------------
// ���̵� �ߺ� �˻� ( ȸ�� )
// ----------------------------------------------------------
function open_member_overlap() {
    var m=document.morning;

    if (m.m_id.value == "") {
        alert("ID�� �ʼ� ���� �Դϴ�. �Է��� �ּ���.");
        m.m_id.focus();
        return false;
    }

    if ((m.m_id.value.length < 6) || (m.m_id.value.length > 16)) {
        alert("ID�� 6���� �̻�, 16���� �����̿��� �մϴ�.");
        m.m_id.focus();
        return false;
    }

    window.open("m_overlap.php?form=morning&focus=m_id&muid="+m.m_id.value,"overlap","width=420,height=250,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no");
}


// ----------------------------------------------------------
// ȸ�� ���� üũ��
// ----------------------------------------------------------
function check_member_form() {
		var m=document.morning;

		if(m.ps_ssl.value == 1 && m.ps_murl.value)
		{
			 m.action = m.ps_murl.value;
		}

		if ("undefined" != typeof m.mobile_confirm_number){
			if (m.mobile_confirm.value.length < 1) {
			   alert("�޴��������ϱ� ��ư�� Ŭ���Ͻ� �� �޴��� ������ȣ�� ��Ȯ�� �Է����ּ���.");
			   m.mobile_confirm.focus();
			   return false;
			}

			if (m.mobile_confirm.value != m.mobile_confirm_number.value) {
			   alert("�޴��� ������ȣ�� Ʋ���ϴ�. �ٽ� �������ּ���.");
			   m.mobile_confirm.focus();
			   return false;
			}
		}

		if ("undefined" != typeof m.m_id){
			if (!m.m_id.value) {
			   alert("���̵� �Է����ּ���..");
			   m.m_id.focus();
			   return false;
			}

			if (!m.id_check.value) {
			   alert("�ߺ����� ���� ���̵� ��Ȯ�ϰ� �Է����ּ���.");
			   m.m_id.focus();
			   return false;
			}
		}

		if ("undefined" != typeof m.old_pass){
			if (m.old_pass.value.length < 4){
			   alert("[������й�ȣ]�� �Է��ϼž� ȸ�������� �����Ͻ� �� �ֽ��ϴ�.");
			   m.old_pass.focus();
			   return false;
			}
		}

		if ("undefined" == typeof m.old_pass){
			if (m.pass1.value.length < 10 || (m.pass1.value.length > 16)) {
			   alert("[��й�ȣ]�� 10���� �̻�, 16���� ������ ����,���� ȥ������ �̿��ϼž� �մϴ�.");
			   m.pass1.focus();
			   return false;
			}
			if(!/[a-z]/i.test(m.pass1.value) || !/[0-9]/.test(m.pass1.value)) { 
			   alert("[��й�ȣ]�� 10���� �̻�, 16���� ������ ����,���� ȥ������ �̿��ϼž� �մϴ�.");
			   m.pass1.focus();
			   return false;
			}
		}else{
			if(m.pass1.value.length > 0){
				if (m.pass1.value.length < 10 || (m.pass1.value.length > 16)) {
				   alert("[��й�ȣ]�� 10���� �̻�, 16���� ������ ����,���� ȥ������ �̿��ϼž� �մϴ�.");
				   m.pass1.focus();
				   return false;
				}
				if(!/[a-z]/i.test(m.pass1.value) || !/[0-9]/.test(m.pass1.value)) { 
				   alert("[��й�ȣ]�� 10���� �̻�, 16���� ������ ����,���� ȥ������ �̿��ϼž� �մϴ�.");
				   m.pass1.focus();
				   return false;
				}
			}
		}

		if ((m.pass1.value) != (m.pass2.value)) {
			alert("��й�ȣ ���� �ʽ��ϴ� ��Ȯ�� �Է��� �ּ���. ");
			m.pass1.focus();
			return false;
		}

		if (m.name.value.length == "") {
			alert("[�̸�]�� �ʼ� �׸��Դϴ�. �Է� �Ͽ� �ּ���.");
			m.name.focus();
			return false;
		}

		if (m.name_eng.value.length == "") {
			alert("[�����̸�]�� �ʼ� �׸��Դϴ�. �Է� �Ͽ� �ּ���.");
			m.name_eng.focus();
			return false;
		}

		if ("undefined" == typeof m.old_pass){
			if (m.sex[0].checked != true && m.sex[1].checked != true) {
				alert("[����]�� �������ּ���.");
				m.sex[0].focus();
				return false;
			}
		}

		if (m.tel1_01.value.length == "" || m.tel1_02.value.length == "" || m.tel1_03.value.length == "") {
			alert("��ȭ�� ��Ȯ�� �Է��Ͽ� �ּ���");
			m.tel1_01.focus();
			return false;
		}

		if (m.tel2_01.value.length == "" || m.tel2_02.value.length == "" || m.tel2_03.value.length == "") {
			alert("�޴�����ȣ�� ��Ȯ�� �Է��Ͽ� �ּ���");
			m.tel2_01.focus();
			return false;
		}

		if ((m.zip1.value.length == "") || (m.zip2.value.length == "")) {
			alert("�����ȣ�� �Է��Ͽ� �ּ���");
			m.zip1.focus();
			return false;
		}

		if (m.address1.value.length == "") {
			alert("�ּҸ� �Է��Ͽ� �ּ���");
			m.address1.focus();
			return false;
		}



		if (m.email1.value.length < 2) {
			alert("[E-mail] �ּҸ� ��Ȯ�ϰ� �Է��Ͽ� �ּ���.");
			m.email1.focus();
			return false;
		}

		if (m.email2.value.length < 5) {
			alert("[E-mail] �ּҸ� ��Ȯ�ϰ� �Է��Ͽ� �ּ���.");
			return false;
		}

		m.target = "target_frame1";
		m.submit();

}


// ----------------------------------------------------------
// �޴�������
// ----------------------------------------------------------
//�޴�������
function mobile_confirm_ok(){
	var m = document.morning;

	if(m.mobile_confirm.value.length > 4){
		if(m.mobile_confirm.value == m.mobile_confirm_number.value){
			$("#mobile_confirm").fadeOut(500);
		}
	}
}

function mobile_confirm_reset(){
	var m = document.morning;

	m.mobile_confirm.value="";
	if ("undefined" != typeof m.mobile_confirm_number){
		m.mobile_confirm_number.value="";
	}
	$("#mobile_confirm").fadeOut(300);
	$("#bt_mobile_confirm").show();
}

function send_confirm_sms(num){
	var m = document.morning;

	if(m.tel2_01.value.length < 3 || m.tel2_02.value.length < 3 || m.tel2_03.value.length < 4){
		alert("�޴��� ��ȣ�� ��Ȯ�� �Է����ּ���.");
		return;
	}

	$.ajax({
		   type: "POST",
		   url: "./m_member_ok.php",    
		   data: "ps_mode=mobile_confirm&mobile_number="+num,
			   
		   success: function(req){
				if ("undefined" != typeof m.mobile_confirm_number){
					m.mobile_confirm_number.value = req;
				}
				$("#mobile_confirm").fadeIn(500);
				$("#bt_mobile_confirm").hide();
		   }});
}


// ----------------------------------------------------------
// �ֹ��� �Է��� üũ
// ----------------------------------------------------------
function check_userinfo() {

	var m=document.morning;

	//alert(m.ps_murl.value);
	if(m.ps_ssl.value == 1 && m.ps_murl.value)
	{
		 m.action = m.ps_murl.value;
	}

	if ("undefined" != typeof m.accept1){
		if ( m.accept1.checked == false) {
			alert("����������ȣ��å ���ǹ�ư�� Ŭ�����ּ���." );
			m.accept1.focus();
			return false;
		}
	}

	if ("undefined" != typeof m.accept2){
		if ( m.accept2.checked == false) {
			alert("ȯ�ұ��� ���ǹ�ư�� Ŭ�����ּ���." );
			m.accept2.focus();
			return false;
		}
	}

	if ( m.buyer_name1.value.length == "" ) {
		alert("[������ ����]�� �ʼ� �׸� �Դϴ�. �Է��� �ֽʽÿ�." );
		m.buyer_name1.focus();
		return false;
	}

	if ( m.buyer_name1_eng.value.length == "" ) {
		alert("[������ ��������]�� �ʼ� �׸� �Դϴ�. �Է��� �ֽʽÿ�." );
		m.buyer_name1_eng.focus();
		return false;
	}

	if (!m["buyer_tel1[0]"].value || !m["buyer_tel1[1]"].value || !m["buyer_tel1[2]"].value) {
		alert( "[��ȭ��ȣ]�� �ʼ� �׸� �Դϴ�. �Է��� �ֽʽÿ�." );
		m["buyer_tel1[0]"].focus();
		return false;
	}

	if ( !m["buyer_tel2[0]"].value || !m["buyer_tel2[1]"].value || !m["buyer_tel2[2]"].value ) {
		alert( "[�޴�����ȣ]�� �ʼ� �׸� �Դϴ�. �Է��� �ֽʽÿ�." );
		m["buyer_tel2[0]"].focus();
		return false;
	}

	if ("undefined" != typeof m.zip1){
		if ( m.zip1.value.length == "" || m.zip2.value.length == "") {
			alert( "[�����ȣ]�� �ʼ� �׸� �Դϴ�. �Է��� �ֽʽÿ�." );
			m.zip1.focus();
			return false;
		}
	}

	if ( m.address1.value.length == "" ) {
		alert( "[������ �ּ�]�� �ʼ� �׸� �Դϴ�. �Է��� �ֽʽÿ�." );
		m.address1.focus();
		return false;
	}

	if ( m.buyer_email.value.length == "" ) {
		alert( "[������ ����]�� �ʼ� �׸� �Դϴ�. �Է��� �ֽʽÿ�." );
		m.buyer_email.focus();
		return false;
	}

	if ("undefined" != typeof m.tonggan){
		if (m.tonggan.value.length < 10){
		   alert("[���������ȣ]�� ��Ȯ�� �Է����ּ���.");
		   m.tonggan.focus();
		   return false;
		}
	}

	if ( m.buyer_name3.value.length == "" ) {
		alert( "��� �޴º��� �̸��� �Է��� �ּ���." );
		m.buyer_name3.focus();
		return false;
	}

	if ( m.buyer_name3_eng.value.length == "" ) {
		alert( "��� �޴º��� �����̸��� �Է��� �ּ���." );
		m.buyer_name3_eng.focus();
		return false;
	}

	if ( !m["buyer_tel3[0]"].value || !m["buyer_tel3[1]"].value || !m["buyer_tel3[2]"].value) {
		alert( "��� �޴º��� ����ó�� �����ּ���." );
		m["buyer_tel3[0]"].focus();
		return false;
	}

	if ( !m["buyer_tel4[0]"].value || !m["buyer_tel4[1]"].value || !m["buyer_tel4[2]"].value ) {
		alert( "��� �޴º��� �޴����� �����ּ���." );
		m["buyer_tel4[0]"].focus();
		return false;
	}

	if ("undefined" != typeof m.zip3){
		if ( m.zip3.value.length == "" || m.zip4.value.length == "") {
			alert( "[�����ȣ]�� �ʼ� �׸� �Դϴ�. �Է��� �ֽʽÿ�." );
			m.zip3.focus();
			return false;
		}
	}

	if ( m.address2.value.length == "" ) {
		alert( "[����� �ּ�]�� �ʼ� �׸� �Դϴ�. �Է��� �ֽʽÿ�." );
		m.address2.focus();
		return false;
	}


	if ("undefined" != typeof m.buyer_payment){

		if(!$("input:radio[name='buyer_payment']:checked").val()){
			alert( "��������� ������ �ּ���." );
			return false;
		}

		if($("input:radio[name='buyer_payment']:checked").val() == "2" && $("input:text[name='buyer_name2']").val() == ""){
			alert( "�Ա����� ������ �Է��ϼ���." );
			return false;
		}
	}

	m.submit();
}

// ----------------------------------------------------------
// �ֹ���Ȯ���� üũ
// ----------------------------------------------------------
function check_userinfo_confirm() {
	var m=document.morning;

	//alert(m.ps_murl.value);
	if(m.ps_ssl.value == 1 && m.ps_murl.value)
	{
		 m.action = m.ps_murl.value;
	}
}

// ----------------------------------------------------------
// ���� ���� ī��
// ----------------------------------------------------------
function accept_check(){
   var m = document.morning;
   m.buyer_name3.value = m.buyer_name1.value;
   m.buyer_name3_eng.value = m.buyer_name1_eng.value;
   m["buyer_tel3[0]"].value = m["buyer_tel1[0]"].value;
   m["buyer_tel3[1]"].value = m["buyer_tel1[1]"].value;
   m["buyer_tel3[2]"].value = m["buyer_tel1[2]"].value;
   m["buyer_tel4[0]"].value = m["buyer_tel2[0]"].value;
   m["buyer_tel4[1]"].value = m["buyer_tel2[1]"].value;
   m["buyer_tel4[2]"].value = m["buyer_tel2[2]"].value;
   
   if ("undefined" != typeof m.zip3){
	   m.zip3.value = m.zip1.value;
	   m.zip4.value = m.zip2.value;
   }

   m.address2.value = m.address1.value;

   get_dosun();
}

// ----------------------------------------------------------
// ������ üũ
// ----------------------------------------------------------
function error (elem,text) {
	window.alert(text);
	elem.select();
	elem.focus();
}


// ----------------------------------------------------------
// �ֹι�ȣ üũ
// ----------------------------------------------------------
function jumincheck(jumin1 ,jumin2) {

		var str_jumin1 = jumin1.value;
		var jumin1_err = jumin1;
		var str_jumin2 = jumin2.value;
		var jumin2_err = jumin2;
		var checkImg='';


		var i3=0
		for (var i=0;i<str_jumin1.length;i++)
		{
		    var ch1 = str_jumin1.substring(i,i+1);
		    if (ch1<'0' || ch1>'9') { i3=i3+1 }
		}
		if ((str_jumin1 == '') || ( i3 != 0 ))
		{
  		  error(jumin1_err,'�ֹε�Ϲ�ȣ�� �߸��Ǿ����ϴ�.\n\n�ٽ��Է����ּ���!');
  		  return false;
		}


		var i4=0
		for (var i=0;i<str_jumin2.length;i++)
		{
		    var ch1 = str_jumin2.substring(i,i+1);
		    if (ch1<'0' || ch1>'9') { i4=i4+1 }
		}
		if ((str_jumin2 == '') || ( i4 != 0 ))
		{
		    error(jumin2_err,'�ֹε�Ϲ�ȣ�� �߸��Ǿ����ϴ�.\n\n�ٽ��Է����ּ���!');
		    return false;
		}

//		if(str_jumin1.substring(0,1) < 4)
//		{
//   	  error(jumin2_err,'�ֹε�Ϲ�ȣ�� �߸��Ǿ����ϴ�.\n\n�ٽ��Է����ּ���!');
//   	  return false;
//		}

		if(str_jumin2.substring(0,1) > 2)
		{
		    error(jumin2_err,'�ֹε�Ϲ�ȣ�� �߸��Ǿ����ϴ�.\n\n�ٽ��Է����ּ���!');
		    return false;
		}

		if((str_jumin1.length > 7) || (str_jumin2.length > 8))
		{
		    error(jumin2_err,'�ֹε�Ϲ�ȣ�� �߸��Ǿ����ϴ�.\n\n�ٽ��Է����ּ���!');
		    return false;
		}

		if ((str_jumin1 == '72') || ( str_jumin2 == '18'))
		{
		  error(jumin1_err,'�ֹε�Ϲ�ȣ�� �߸��Ǿ����ϴ�.\n\n�ٽ��Է����ּ���!');
		  return false;
		}

		var f1=str_jumin1.substring(0,1)
		var f2=str_jumin1.substring(1,2)
		var f3=str_jumin1.substring(2,3)
		var f4=str_jumin1.substring(3,4)
		var f5=str_jumin1.substring(4,5)
		var f6=str_jumin1.substring(5,6)
		var hap=f1*2+f2*3+f3*4+f4*5+f5*6+f6*7
		var l1=str_jumin2.substring(0,1)
		var l2=str_jumin2.substring(1,2)
		var l3=str_jumin2.substring(2,3)
		var l4=str_jumin2.substring(3,4)
		var l5=str_jumin2.substring(4,5)
		var l6=str_jumin2.substring(5,6)
		var l7=str_jumin2.substring(6,7)
		hap=hap+l1*8+l2*9+l3*2+l4*3+l5*4+l6*5
		hap=hap%11
		hap=11-hap
		hap=hap%10
		if (hap != l7)
		{
		  error(jumin1_err,'�ֹε�Ϲ�ȣ�� �߸��Ǿ����ϴ�.\n\n�ٽ��Է����ּ���!');
		  return false;
		}

		var i9=0

		return true;

}


// ----------------------------------------------------------
// ������ ����� ��ũ��Ʈ
// ----------------------------------------------------------
function del_really(){
    if (confirm('\n������ ������ �Ұ����մϴ�.\n������ �����ʹ� ���� �����˴ϴ�.\n\n(������ �����Ͻðڽ��ϱ�?)\n')) return true;
    return false;
}


// ----------------------------------------------------------
// �� ���Ϸ�
// ----------------------------------------------------------
function morning_mailer_check() {
    var m=document.morning_mailer;

    if (m.mailer_receive_email.value.length == "") {
       alert("�޴º� �̸����� �ʼ� �Դϴ�.");
       m.mailer_receive_email.focus();
      return false;
    }

    if (m.mailer_subject.value.length == "") {
       alert("���� ������ �ʼ� �Դϴ�.");
       m.mailer_subject.focus();
      return false;
    }

    if (m.mailer_body.value.length == "") {
       alert("���� ������ �ʼ� �Դϴ�.");
       m.mailer_body.focus();
      return false;
    }

}


// ----------------------------------------------------------
// �ݼ��� ���Ϸ�
// ----------------------------------------------------------
function morning_callmailer_check() {
    var m=document.morning_mailer;

	if ("undefined" != typeof m.accept2){
		if (m.accept2.checked != true) {
		   alert("����������޹�ħ�� �������ּ���.");
		   m.accept2.focus(); 
		   return false;
		}
	}

    if (m.mailer_send_name.value == "") {
       alert("������ �Է��ϼ���");
       m.mailer_send_name.focus();
      return false;
    }

    if (m.q_mode.value == "") {
       alert("��������� �����ϼ���");
       m.q_mode.focus();
      return false;
    }

    if (m.mailer_send_email.value == "") {
       alert("�亯�� ���� �����ּҸ� �Է��ϼ���.");
       m.mailer_send_email.focus();
      return false;
    }

    if (m.mailer_subject.value == "") {
       alert("������ �Է��ϼ���.");
       m.mailer_subject.focus();
      return false;
    }

    if (m.mailer_body.value == "") {
       alert("������ �Է��ϼ���.");
       m.mailer_body.focus();
      return false;
    }
}


// ----------------------------------------------------------
// �� ���Ϸ�
// ----------------------------------------------------------
function morning_recommend_check() {
    var m=document.morning_mailer;

    if (m.mailer_receive_email.value.length == "") {
       alert("�޴º� �̸����� �ʼ� �Դϴ�.");
       m.mailer_receive_email.focus();
      return false;
    }
}

function really_all(){
    if (confirm('\n������ ������ �Ұ����մϴ�.\n������ �����ʹ� ���� �����˴ϴ�.\n\n(������ ���� �Ͻðڽ��ϱ�?)\n')) 
	{ 
	  document.uid_check_form.submit();
	}
    return false;
}


// ----------------------------------------------------------
// PHPSCHOOL �ξߴ��� �ҽ� 
// ----------------------------------------------------------
function setEmbed() 
{ 
  var obj = new String; 
  var parameter = new String; 
  var embed = new String; 
  var html = new String; 
  var allParameter = new String; 
  var clsid = new String; 
  var codebase = new String; 
  var pluginspace = new String; 
  var embedType = new String; 
  var src = new String; 
  var width = new String; 
  var height = new String; 

    
  this.init = function( getType , s ,w , h ) { 
      
      if ( getType == "flash") 
      { 

        clsid = "D27CDB6E-AE6D-11cf-96B8-444553540000";        
        codebase = "http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0"; 
        pluginspage = "http://www.macromedia.com/go/getflashplayer"; 
        embedType = "application/x-shockwave-flash"; 
      } 
      /* type �߰� 
      else if ( ) 
      { 
      } 
      */ 
            
      parameter += "<param name='movie' value='"+ s + "'>\n";  
      parameter += "<param name='quality' value='high'>\n";    
      
      src = s; 
      width = w; 
      height = h; 
  } 
  
  this.parameter = function( parm , value ) {      
      parameter += "<param name='"+parm +"' value='"+ value + "'>\n";        
      allParameter += " "+parm + "='"+ value+"'"; 
  }  
  
  this.show = function() { 
      if ( clsid ) 
      { 
        obj = "<object classid=\"clsid:"+ clsid +"\" codebase=\""+ codebase +"\" width='"+ width +"' height='"+ height +"'>\n"; 
      } 
      
      embed = "<embed src='" + src + "' pluginspage='"+ pluginspage + "' type='"+ embedType + "' width='"+ width + "' height='"+ height +"'"+ allParameter +" ></embed>\n"; 
      
      if ( obj ) 
      { 
        embed += "</object>\n"; 
      } 
      
      html = obj + parameter + embed; 
      
      document.write( html );  
  } 
  
}


// ----------------------------------------------------------
// ��������
// ----------------------------------------------------------
// �����ޱ�â ���� 
function coupon_view(cuid){
	open_window('coupon', 'm_coupon_view.php?ps_cuid='+cuid, 40, 40, 780, 450, 0, 0, 0, 1, 1);
}

// ���� ī�װ� Ȯ��â
function coupon_muse(cuid){
	open_window('coupon', 'm_coupon_use.php?ps_mode=category&ps_cuid='+cuid, 40, 40, 430, 300, 0, 0, 0, 1, 1);
}

function coupon_suse(cuid){
	open_window('coupon', 'm_coupon_use.php?ps_mode=goods&ps_cuid='+cuid, 40, 40, 430, 300, 0, 0, 0, 1, 1);
}


// ----------------------------------------------------------
//maxlength ��ŭ �ű�� �������� �̵��ϱ�.... onkeyup="nextFocus('form1','jumin1','jumin2')"
// ----------------------------------------------------------
function nextFocus(sFormName,sNow,sNext)
{
	var sForm = 'document.'+ sFormName +'.'
	var oNow = eval(sForm + sNow);

	if (typeof oNow == 'object')
	{
		if ( oNow.value.length == oNow.maxLength)
		{
			var oNext = eval(sForm + sNext);

			if ((typeof oNext) == 'object')
				oNext.focus();
		}
	}
}


// ----------------------------------------------------------
// �ֹι�ȣüũ
// ----------------------------------------------------------
function jumin_chk(numbers){

	fmt = /^\d{6}[1234]\d{6}$/;
	if (!fmt.test(numbers)) {
		alert('�߸��� �ֹε�Ϲ�ȣ�Դϴ�.'); return false;
	}

	birthYear = (numbers.charAt(6) <= '2') ? '19' : '20';
	birthYear += numbers.substr(0, 2);
	birthMonth = numbers.substr(2, 2) - 1;
	birthDate = numbers.substr(4, 2);
	birth = new Date(birthYear, birthMonth, birthDate);

	if ( birth.getYear()%100 != numbers.substr(0, 2) || birth.getMonth() != birthMonth || birth.getDate() != birthDate) {
		alert('�߸��� �ֹε�Ϲ�ȣ�Դϴ�.');
		return false;
	}

	buf = new Array(13);
	for (i = 0; i < 13; i++) buf[i] = parseInt(numbers.charAt(i));

	multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
	for (i = 0, sum = 0; i < 12; i++) sum += (buf[i] *= multipliers[i]);

	if ((11 - (sum % 11)) % 10 != buf[12]) {
		alert('�߸��� �ֹε�Ϲ�ȣ�Դϴ�.');
		return false;
	}
	return true;

}


// ----------------------------------------------------------
// ��ٱ��Ͽ��� ��ٱ��ϴ��
// ----------------------------------------------------------
function zzcart(form_name){
	var m = form_name;

	if ("undefined" != typeof m.goods_option1){
		if (m.goods_option1.value == ",,,0") {
		   alert("�ɼ��� �����ϼ���.");
		   return;
		}
	}

	if ("undefined" != typeof m.goods_option2){
		if (m.goods_option2.value == ",,,0") {
		   alert("�ɼ��� �����ϼ���.");
		   return;
		}
	}

	if ("undefined" != typeof m.goods_option3){
		if (m.goods_option3.value == ",,,0") {
		   alert("�ɼ��� �����ϼ���.");
		   return;
		}
	}

	if ("undefined" != typeof m.goods_option4){
		if (m.goods_option4.value == ",,,0") {
		   alert("�ɼ��� �����ϼ���.");
		   return;
		}
	}

	if ("undefined" != typeof m.goods_option5){
		if (m.goods_option5.value == ",,,0") {
		   alert("�ɼ��� �����ϼ���.");
		   return;
		}
	}

	if ("undefined" != typeof m.goods_option6){
		if (m.goods_option6.value == ",,,0") {
		   alert("�ɼ��� �����ϼ���.");
		   return;
		}
	}

	if ("undefined" != typeof m.goods_option8){
		if (m.goods_option8.value == ",,,0") {
		   alert("�ɼ��� �����ϼ���.");
		   return;
		}
	}

	if ("undefined" != typeof m.goods_option9){
		if (m.goods_option9.value == ",,,0") {
		   alert("�ɼ��� �����ϼ���.");
		   return;
		}
	}

	if ("undefined" != typeof m.goods_option10){
		if (m.goods_option10.value == ",,,0") {
		   alert("�ɼ��� �����ϼ���.");
		   return;
		}
	}

	if ("undefined" != typeof m.goods_option11){
		if (m.goods_option11.value == ",,,0") {
		   alert("�ɼ��� �����ϼ���.");
		   return;
		}
	}

	if ("undefined" != typeof m.goods_option12){
		if (m.goods_option12.value == ",,,0") {
		   alert("�ɼ��� �����ϼ���.");
		   return;
		}
	}

	if ("undefined" != typeof m.goods_option13){
		if (m.goods_option13.value == ",,,0") {
		   alert("�ɼ��� �����ϼ���.");
		   return;
		}
	}

	m.action = "m_cart.php";
	m.submit();
	return;
}


// ----------------------------------------------------------
// onoff ���̾�
// ----------------------------------------------------------
function _IDLY(obj){return document.getElementById(obj)}
function onofflayer(obj,mode)
{
	obj = _IDLY(obj);
	if (mode) obj.style.display = mode;
	else obj.style.display = (obj.style.display!="none") ? "none" : "block";
}


// ----------------------------------------------------------
// �Խù� ��ü����
// ----------------------------------------------------------
function check_it() { 
        var from=document.uid_check_form;
		var uid_check = document.getElementsByName("uid_check[]");

        if(from.but.checked==true){ 
              for ( i=0;i < uid_check.length;i++) {                  
                              uid_check[i].checked = true;              
                } 
        }else{ 
                for ( i=0;i < uid_check.length;i++) {                  
                                uid_check[i].checked =false;              
                } 
      } 
}


// ----------------------------------------------------------
// �����ϱ⿡ ����ϴ� ��ũ
// ----------------------------------------------------------
function goTwitter(msg,url) {
  var href = "http://twitter.com/home?status=" + encodeURIComponent(msg) + " " + encodeURIComponent(url);
  var twitter = window.open(href, 'twitter', '');
  twitter.focus();
}
function goFaceBook(msg,url) {
  var href = "http://www.facebook.com/sharer.php?u=" + url + "&t=" + encodeURIComponent(msg);
  var facebook = window.open(href, 'facebook', '');
  facebook.focus();
}
function goMe2Day(msg,url,tag) {
  var href = "http://me2day.net/posts/new?new_post[body]=" + encodeURIComponent(msg) + " " + encodeURIComponent(url) + "&new_post[tags]=" + encodeURIComponent(tag);
  var me2Day = window.open(href, 'me2Day', '');
  me2Day.focus();
}


// ----------------------------------------------------------
// ��
// ----------------------------------------------------------
function Zzim(uid,mode) {
	//dynamic.src = "m_mylist_write.php?goods_num="+uid+"&mymode="+mode;
	target_frame1.location.href="m_mylist_write.php?goods_num="+uid+"&mymode="+mode;
}


// ----------------------------------------------------------
// �����̵�
// ----------------------------------------------------------
function show(p){
	document.getElementById(p).style.display='block';
}
function hide(p){
    document.getElementById(p).style.display='none';
}


// ----------------------------------------------------------
// ��ٱ��ϴ��
// ----------------------------------------------------------
function sendcart(form_name, c_flag,url){

		var m = form_name;

		if ("undefined" != typeof m.goods_option1){
			if (m.goods_option1.value == ",,,0") {
			   alert("�ɼ��� �����ϼ���.");
			   return;
			}
		}

		if ("undefined" != typeof m.goods_option2){
			if (m.goods_option2.value == ",,,0") {
			   alert("�ɼ��� �����ϼ���.");
			   return;
			}
		}

		if ("undefined" != typeof m.goods_option3){
			if (m.goods_option3.value == ",,,0") {
			   alert("�ɼ��� �����ϼ���.");
			   return;
			}
		}

		if ("undefined" != typeof m.goods_option4){
			if (m.goods_option4.value == ",,,0") {
			   alert("�ɼ��� �����ϼ���.");
			   return;
			}
		}

		if ("undefined" != typeof m.goods_option5){
			if (m.goods_option5.value == ",,,0") {
			   alert("�ɼ��� �����ϼ���.");
			   return;
			}
		}

		if ("undefined" != typeof m.goods_option6){
			if (m.goods_option6.value == ",,,0") {
			   alert("�ɼ��� �����ϼ���.");
			   return;
			}
		}

		if ("undefined" != typeof m.goods_option8){
			if (m.goods_option8.value == ",,,0") {
			   alert("�ɼ��� �����ϼ���.");
			   return;
			}
		}

		if ("undefined" != typeof m.goods_option9){
			if (m.goods_option9.value == ",,,0") {
			   alert("�ɼ��� �����ϼ���.");
			   return;
			}
		}

		if ("undefined" != typeof m.goods_option10){
			if (m.goods_option10.value == ",,,0") {
			   alert("�ɼ��� �����ϼ���.");
			   return;
			}
		}

		if ("undefined" != typeof m.goods_option11){
			if (m.goods_option11.value == ",,,0") {
			   alert("�ɼ��� �����ϼ���.");
			   return;
			}
		}

		if ("undefined" != typeof m.goods_option12){
			if (m.goods_option12.value == ",,,0") {
			   alert("�ɼ��� �����ϼ���.");
			   return;
			}
		}

		if ("undefined" != typeof m.goods_option13){
			if (m.goods_option13.value == ",,,0") {
			   alert("�ɼ��� �����ϼ���.");
			   return;
			}
		}

		form_name.ps_select.value = c_flag;
		if(c_flag == "C"){
			form_name.target = "target_frame1";
		}else{
			form_name.target = "";
		}

		if(!url){
			form_name.action = "m_cart.php";
		}else{
			form_name.charset = 'utf-8';
			form_name.action = url;
		}

		form_name.submit();
		return;
}


// ----------------------------------------------------------
// ��ٱ��� ��������
// ----------------------------------------------------------
function cart_change(form_name, c_flag){

		form_name.ps_caid.value = c_flag;

		form_name.action = "m_cart.php";
		form_name.submit();

		return;
}


// ----------------------------------------------------------
// 3�ڸ����� �����
// ----------------------------------------------------------
function addCommas(strValue){ 
	var objRegExp = new RegExp('(-?[0-9]+)([0-9]{3})'); 

	while(objRegExp.test(strValue)) { 
	strValue = strValue.replace(objRegExp, '$1,$2'); 
	} 
	return strValue; 
}


// ----------------------------------------------------------
// ��ǰ �󼼺��� �����ø����ư
// ----------------------------------------------------------
function good_cal(val)
{
	if (val > 0){
		goods.ps_num.value = (goods.ps_num.value*1) + 1;
	} else {
		if(goods.ps_num.value>1){ 
			goods.ps_num.value = goods.ps_num.value - 1;
		}
	}

	var m=document.goods;
	var dft = ",,,0";

	if ("undefined" != typeof m.goods_option1){
		var option1_row = m.goods_option1.value.split(","); 
	}else{
		var option1_row = dft.split(",");
	}

	if ("undefined" != typeof m.goods_option2){
		var option2_row = m.goods_option2.value.split(","); 
	}else{
		var option2_row = dft.split(",");
	}
	
	if ("undefined" != typeof m.goods_option3){
		var option3_row = m.goods_option3.value.split(",");
	}else{
		var option3_row = dft.split(",");
	}

	if ("undefined" != typeof m.goods_option8){
		var option8_row = m.goods_option8.value.split(",");
	}else{
		var option8_row = dft.split(",");
	}

	if ("undefined" != typeof m.goods_option9){
		var option9_row = m.goods_option9.value.split(",");
	}else{
		var option9_row = dft.split(",");
	}

	if ("undefined" != typeof m.goods_option10){
		var option10_row = m.goods_option10.value.split(",");
	}else{
		var option10_row = dft.split(",");
	}

	if ("undefined" != typeof m.goods_option11){
		var option11_row = m.goods_option11.value.split(",");
	}else{
		var option11_row = dft.split(",");
	}

	if ("undefined" != typeof m.goods_option12){
		var option12_row = m.goods_option12.value.split(",");
	}else{
		var option12_row = dft.split(",");
	}

	if ("undefined" != typeof m.goods_option13){
		var option13_row = m.goods_option13.value.split(",");
	}else{
		var option13_row = dft.split(",");
	}

	if(option8_row[3] > 0){
		m.option_money.value = (parseInt(option1_row[3]) + parseInt(option2_row[3]) + parseInt(option3_row[3]) + parseInt(option8_row[3]) + parseInt(option9_row[3]) + parseInt(option10_row[3]) + parseInt(option11_row[3]) + parseInt(option12_row[3]) + parseInt(option13_row[3])) * m.ps_num.value;
	}else{
		m.option_money.value = (parseInt(option1_row[3]) + parseInt(option2_row[3]) + parseInt(option3_row[3]) + parseInt(option9_row[3]) + parseInt(option10_row[3]) + parseInt(option11_row[3]) + parseInt(option12_row[3]) + parseInt(option13_row[3]) + parseInt(m.money_ea.value)) * m.ps_num.value;
	}

	m.option_money.value = addCommas(m.option_money.value)+"��";

	return;
}


// ----------------------------------------------------------
// ������
// ----------------------------------------------------------
function get_dosun(){
	$("input:text[name='use_buyer_point']").val($("input:text[name='use_buyer_point']").val()*1);
	var delivery_dosun = $("input:hidden[name='delivery_dosun']").val();
	var delivery_dosun_price = $("input:hidden[name='delivery_dosun_price']").val();
	var delivery_method = $("input:radio[name='delivery_method']:checked").val();
	
	var delivery_dosun_arr = delivery_dosun.split("/");

	var address2 = $("input:text[name='address2']").val();
	$("input:hidden[name='ps_delivery_dosun']").val(0);

	for(i=0;i<delivery_dosun_arr.length;i++){
		if(address2.indexOf(delivery_dosun_arr[i]) > -1){
			$("input:hidden[name='ps_delivery_dosun']").val(delivery_dosun_price);
		}
	}

	//��������..
	if ("undefined" != typeof delivery_method){
		if(delivery_method.indexOf("����") > -1){
			$("input:hidden[name='ps_delivery_dosun']").val("0");
		}
	}

	point_check();
}

// ----------------------------------------------------------
// �ֹ����ۼ� mall_userinfo.html
// ----------------------------------------------------------
function point_check() {
    var m = document.morning;
    var account_price = 0;
    var total_price = m.ps_total_price.value;	//������ǰ�ݾ�
	var total_delivery = m.basic_delivery_price1.value;	//���������� �� ��ۺ�
	var total_pay = (total_price*1)+(total_delivery*1); //��ۺ����� �� ������
	var total_delivery_add = m.ps_total_delivery_add.value;
	var delivery_price = 0;
	var delivery_max_price = 0;
	var wrapping_price = 0;
	var delivery_data = "";
	var wrapping_data = "";
	var temparray1 = new Array();
	var temparray2 = new Array();
	var coupon_use = 0;
	var coupon_price = 0;
	var cf_besong_type = m.cf_besong_type.value;
	var user_point = m.ps_user_point.value;
	var use_giftcard = 0;
	var use_max_point	   = m.use_max_point.value;
	var ps_delivery_dosun = m.ps_delivery_dosun.value;

	if ("undefined" != typeof m.giftcard_price){
		var giftcard_price = m.giftcard_price.value; //����Ʈī�� ����

		if(giftcard_price < 0){
			m.giftcard_price.value = "0";
			m.giftcard_use.value = "";
		}
	}else{
		var giftcard_price = 0;
	}

	if ("undefined" != typeof m.use_buyer_point){
		var use_point = m.use_buyer_point.value;
	}else{
		var use_point = 0;
	}

	if ("undefined" != typeof m.coupon_use){
		coupon_use         = m.coupon_use.value;
		coupon_price       = m.coupon_price.value;
	}

	if(coupon_price == ""){ coupon_price =0;}
	if(use_point == ""){use_point = 0;}

	//�ŷ���ü�� ��۷���
	if(cf_besong_type == "1"){
		delivery_price = m.basic_delivery_price1.value;

	}else{
	//�ŷ���ü�� ��۷����� �ƴҶ�

		if ("undefined" != typeof m.delivery_method){
			for(i=0; i<m.delivery_method.length; i++){
				if(m.delivery_method[i].checked){ 
					delivery_data = m.delivery_method[i].value;
				}
			} 
			if(!delivery_data) {
				delivery_data = m.delivery_method.value;
			}

			temparray1 = delivery_data.split(",");	
			delivery_price     = temparray1[1];
			delivery_max_price = temparray1[2];
		}

		if ("undefined" != typeof m.wrapping_method){
			for(i=0; i<m.wrapping_method.length; i++){
				if(m.wrapping_method[i].checked){ 
					wrapping_data = m.wrapping_method[i].value;
				}
			}
			if(!wrapping_data) {
				wrapping_data = m.wrapping_method.value;
			}
			

			temparray2 = wrapping_data.split(",");	
			wrapping_price     = temparray2[1];
		}


		if(eval(total_price) >= eval(delivery_max_price)) {
			delivery_price  = "0";	
		}
		if(m.basic_delivery_price2.value == "1") {
			delivery_price = "0";
		}

	}

	//�������߰�
	delivery_price = eval(delivery_price) + eval(ps_delivery_dosun*1);

   

	//����Ʈī�� ���װ��
	if(giftcard_price > 0){
		var remain_price = eval(total_price) + eval(delivery_price) + eval(wrapping_price) + eval(total_delivery_add) - eval(coupon_price) - eval(use_point) - eval(giftcard_price);

		if(remain_price > 0){
			use_giftcard = giftcard_price;
		}else{
			use_giftcard = eval(total_price) + eval(delivery_price) + eval(wrapping_price) + eval(total_delivery_add) - eval(coupon_price) - eval(use_point);
		}
		document.getElementById('giftcard_mss').childNodes[0].nodeValue = "����Ʈī�� ����� ���� ������ ���������� ��ȯ�˴ϴ�.";

		m.giftcard_price.value = use_giftcard;
	}

	//�������Ʈ ����üũ
	if ("undefined" != typeof m.use_buyer_point){
		if(isNaN(use_point)) {
			alert("��� ����Ʈ�� ���ڸ� �Է��Ͽ� �ֽʽÿ�.");
			m.use_buyer_point.value = 0;
			m.total_account_price.value = eval(total_price) + eval(delivery_price) + eval(wrapping_price) + eval(total_delivery_add) - eval(coupon_price);
			m.remain_buyer_point.value = addCommas(user_point+"")+"��";
			return;
		}
	}
    
	//������ ����Ʈ���� ���� ����Ұ��..
	if ("undefined" != typeof m.use_buyer_point){
		if(eval(user_point) < eval(use_point)) {
			alert("��� ������ ����Ʈ("+user_point+")���� ���� ����Ʈ�� ��� �ϽǼ� �����ϴ�.");
			m.use_buyer_point.value = 0;
			m.total_account_price.value = addCommas(eval(total_price) + eval(delivery_price) + eval(wrapping_price) + eval(total_delivery_add) - eval(coupon_price)+"")+"��";
			m.remain_buyer_point.value = addCommas(user_point+"")+"��";
			return;
		}
	}

	if(eval(use_max_point) > 0 && eval(use_max_point) < eval(use_point)) {
        alert("�������� �ִ� "+use_max_point+"�� ���� ����Ͻ� �� �ֽ��ϴ�.");
        m.use_buyer_point.value = 0;
        m.total_account_price.value = addCommas(eval(total_price) + eval(delivery_price) + eval(wrapping_price) + eval(total_delivery_add) - eval(coupon_price)+"")+"��";
        m.remain_buyer_point.value = eval(user_point);
        return;
    }

    if ("undefined" != typeof m.coupon_use){
		if(eval(total_price) < eval(coupon_price)) {
			alert("��ǰ ���Ծ׼� ���� �������ξ׼��� �� �����ϴ�. Ȯ�� �Ͽ� �ֽʽÿ�.");
			m.use_buyer_point.value = 0;
			m.total_account_price.value = addCommas(eval(total_price) + eval(delivery_price) + eval(wrapping_price) + eval(total_delivery_add)+"")+"��";
			m.remain_buyer_point.value = addCommas(user_point+"")+"��";
			m.coupon_use.value   = 0;
			m.coupon_price.value = 0;
			return;
		}
	}

    if ("undefined" != typeof m.use_buyer_point){
		if(eval(total_price) + eval(delivery_price) + eval(wrapping_price) + eval(total_delivery_add) - eval(coupon_price) < eval(use_point)) {
			alert("���� �ݾ� ���� ���� ����Ʈ�� �Է� �ϼ̽��ϴ�.");
			m.use_buyer_point.value = 0;
			m.total_account_price.value = addCommas(eval(total_price) + eval(delivery_price) + eval(wrapping_price) + eval(total_delivery_add) - eval(coupon_price)+"")+"��";
			m.remain_buyer_point.value = addCommas(user_point+"")+"��";
			m.giftcard_price.value	= 0;
			m.giftcard_use.value	= "";
			return;
		}
	}
	var account_price = eval(total_price) + eval(delivery_price) + eval(wrapping_price)  + eval(total_delivery_add) - eval(use_point) - eval(coupon_price) - eval(use_giftcard); //�Ѱ����ݾ�
    var remain_point = eval(user_point) - eval(use_point); //������� ��������Ʈ

    m.total_account_price.value = addCommas(account_price*1+"")+"��";

    if ("undefined" != typeof m.remain_buyer_point){
		m.remain_buyer_point.value = addCommas(remain_point+"")+"��";
	}

}


function coupon_select() 
{
    var m=document.morning;
	// ī�װ� �Ǵ� ��ǰ �Է� 
	open_window('goods', 'm_coupon_select.php', 140, 140, 620, 600, 0, 0, 0, 1, 0);
}

// ���Ź������ȸ
function open_besong() {
	window.open("m_besong_search.php","supply","width=630,height=400,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no");
}


//�Ա�����
function show_bank(str){
	
	//�����弱��
	if(str == "mu"){
		$("#show_bank").show();
		$("#show_tax").show();
	}

	//�ſ�ī�弱��
	if(str == "sinyong"){
		$("#show_bank").hide();
		$("#show_tax").hide();
	}

	//�ٸ�����(�Ա������Է¸� ���ֱ�)
	if(str == "nobank"){
		$("#show_bank").hide();
		$("#show_tax").show();
	}
}


function show_bank_m(str){
	if(str == "on"){
		$(".show_mu").show();
	}else{
		$(".show_mu").hide();
	}
}


//���ݰ�꼭,������
function tax_display(str){
	document.getElementById('tax_1').style.display = 'none';
	document.getElementById('tax_2').style.display = 'none';
	document.getElementById('tax_3').style.display = 'none';

	if(str){
		document.getElementById(str).style.display = 'block';
	}
}


// ----------------------------------------------------------
// ����ǰ���� mall_userinfo_confirm.html
// ----------------------------------------------------------
function chkNumeric(objText){
  var chrTmp;
  var strTmp = objText.value;
  var chkAlpha = false;
  var resString = '0';

  for(var i=0; i<=strTmp.length; i++){
    chrTmp = strTmp.charCodeAt(i);
    if ((chrTmp <=47 && chrTmp > 31) || chrTmp >= 58) {
      chkAlpha = true;
    } else {
      resString = resString + String.fromCharCode(chrTmp);
    }
  }

  if(chkAlpha == true){
    alert("���ڸ��� �Է��ϼ���");
    objText.value = resString;
    objText.focus();
    return false;
  }
return true;
}

function set_goods_cnt(type,inum){
  var m = document.morning;
  var cnt = "";
  var cnt_text;
  var cnt_num = 0;

  for(i=0; i< m.elements.length; i++){
     var t = morning.elements[i]; 
     if ((t.name == "gift_num[]") && (t.type == "text") && (cnt_num == inum)){
       cnt = t.value;
       cnt_text = t;
     }

     if((t.name == "gift_num[]") && (t.type == "text")){
       cnt_num++;
     }
  }

if(!cnt_text) alert("���õ� ����ǰ�� �����Ҽ��� �����ϴ�. ���� ������ ���� �ٶ��ϴ�.");
  chkNumeric(cnt_text);  

  if(type == 'up'){
    if(cnt >= 0 && cnt <= 999){
      cnt_text.value = eval(eval(cnt)+1);
    }else{
      cnt_text.cnt.value = 1;
    }
  }else{
    if(cnt > 0){
      cnt_text.value = eval(eval(cnt)-1);
    }else{
      cnt_text.value = 0;
    }
  }
  gift_check(inum);
  return;
}

function gift_check(inum){
  var m = document.morning;
  var total_price = m.gift_all_price.value;
  var temparray2 = new Array();
  var gift_price = 0;

  var one_check = 0;
  var tc = 0;
  var wc = 0;
  var gift_check = new Array();
  var gift_num   = new Array();
  var i;
  var cnt_num = 0;
  var stock_check = 0;

  for(i=0; i< m.elements.length; i++){
    var t = morning.elements[i];

    if((t.name == "gift_method[]") && ((t.type == "select-one") || (t.type == "hidden"))){
      one_check = 1;
      gift_check[tc] = t.value;
    }

    if((t.name == "gift_num[]") && (t.type == "text")){
      chkNumeric(t);
      gift_num[tc] = t.value;
      tc++;
    }
  }

  for(i=0; i<gift_check.length; i++){
    temparray2 = gift_check[i].split(",");
    if(gift_num[i]){
      if(eval(temparray2[4])<gift_num[i]){
        for(j=0; j< m.elements.length; j++){
          var t = morning.elements[j];

          if((t.name == "gift_num[]") && (t.type == "text") && (cnt_num == inum)){
            t.value = 0;
            temparray2[6] = 0;
            gift_num[i] = 0;
          }

          if((t.name == "gift_num[]") && (t.type == "text")){
            cnt_num++;
          }
        }
        stock_check = 1;
      }
      gift_price  = gift_price + (eval(temparray2[6])*eval(gift_num[i]));	
    }
    cnt_num = 0;
  }

  if(!gift_price){
    gift_price = 0;
  }

  if(eval(total_price) < eval(gift_price)){
    alert("��� ������ ����ǰ�׼�("+total_price+")���� ���� ����ǰ�� �����ϽǼ� �����ϴ�.");
    m.total_gift_price.value = total_price;

    for(i=0; i< m.elements.length; i++){
      var t = morning.elements[i];
      if((t.name == "gift_num[]") && (t.type == "text")){
        t.value = 0;
      }
    }
    return;
  }

  m.total_gift_price.value = eval(total_price) - eval(gift_price);

  if(stock_check == 1) {
    alert("��� ���� ���� ����ǰ ������ �����ϼ̽��ϴ�.");
    return;
  }
}

function check_userinfo_confirm(){
  var m=document.morning;
    if(typeof(m.total_gift_price) != "undefined"){
      var limit_gift_price = eval(m.limit_gift_price.value);
      var total_gift_price = eval(m.total_gift_price.value);
      if(limit_gift_price <= total_gift_price){
        if(confirm('\n����ǰ�� �����ϽǼ� �ִ� �ݾ��� ���� �ֽ��ϴ�.\n\n��� �����Ͻðڽ��ϱ�? (Ȯ���� �����ּ���)\n\n�߰� �����Ͻðڽ��ϱ�? (��Ҹ� �����ּ���)')){
        return true;
      }
        return false;
    }
  }
  return;
}


// ----------------------------------------------------------
// ��ǰ�� �ɼǰ����� mall_goods_skin1.html
// ----------------------------------------------------------
function option_view() {
	var m=document.goods;
	var dft = ",,,0";

	if ("undefined" != typeof m.goods_option1){
		var option1_row = m.goods_option1.value.split(","); 
	}else{
		var option1_row = dft.split(",");
	}

	if ("undefined" != typeof m.goods_option2){
		var option2_row = m.goods_option2.value.split(","); 
	}else{
		var option2_row = dft.split(",");
	}
	
	if ("undefined" != typeof m.goods_option3){
		var option3_row = m.goods_option3.value.split(",");
	}else{
		var option3_row = dft.split(",");
	}

	if ("undefined" != typeof m.goods_option8){
		var option8_row = m.goods_option8.value.split(",");
	}else{
		var option8_row = dft.split(",");
	}


	if ("undefined" != typeof m.goods_option9){
		var option9_row = m.goods_option9.value.split(",");
	}else{
		var option9_row = dft.split(",");
	}

	if ("undefined" != typeof m.goods_option10){
		var option10_row = m.goods_option10.value.split(",");
	}else{
		var option10_row = dft.split(",");
	}

	if ("undefined" != typeof m.goods_option11){
		var option11_row = m.goods_option11.value.split(",");
	}else{
		var option11_row = dft.split(",");
	}

	if ("undefined" != typeof m.goods_option12){
		var option12_row = m.goods_option12.value.split(",");
	}else{
		var option12_row = dft.split(",");
	}

	if ("undefined" != typeof m.goods_option13){
		var option13_row = m.goods_option13.value.split(",");
	}else{
		var option13_row = dft.split(",");
	}

	if(option8_row[3] > 0){
		m.option_money.value = (parseInt(option1_row[3]) + parseInt(option2_row[3]) + parseInt(option3_row[3]) + parseInt(option8_row[3]) + parseInt(option9_row[3]) + parseInt(option10_row[3]) + parseInt(option11_row[3]) + parseInt(option12_row[3]) + parseInt(option13_row[3])) * m.ps_num.value;
	}else{
		m.option_money.value = (parseInt(option1_row[3]) + parseInt(option2_row[3]) + parseInt(option3_row[3]) + parseInt(option9_row[3]) + parseInt(option10_row[3]) + parseInt(option11_row[3]) + parseInt(option12_row[3]) + parseInt(option13_row[3]) + parseInt(m.money_ea.value)) * m.ps_num.value;
	}

	m.option_money.value = addCommas(m.option_money.value)+"��";
}

//�̹��� ��ü
function imageView(strImage)
{
	this.document.images['mainImage'].src = strImage;
}

//������Ÿ��
document.write("<div style='position:absolute;z-index:-9999;left:-1000px'><iframe name='target_frame1'src='' width=0 height=0></iframe></div>");
document.write("<script id='dynamic'></script>");


// �ѿ���
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);


function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_showHideLayers() { //v3.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
    obj.visibility=v; }
}

// �˾�

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

// ��� ��ũ�� img �±׿� onfocus=blur() ó��
function bluring(){ 
if(event.srcElement.tagName=="A"||event.srcElement.tagName=="IMG") document.body.focus(); 
} 
document.onfocusin=bluring; 
 
 // ���� ���� �Լ�
function trans(id,after) 
{ 
eval(id+'.filters.blendTrans.stop();'); 
eval(id+'.filters.blendTrans.Apply();'); 
eval(id+'.src="'+after+'";'); 
eval(id+'.filters.blendTrans.Play();'); 
} 
function Find_Obj(n, d) { 
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=Find_Obj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}
// �θ޴� ���̾� ����/���̱� �Լ�
function Show_Hide() { 
  var i,p,v,obj,args=Show_Hide.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=Find_Obj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
    obj.visibility=v; }
}

/* flashWrite(���ϰ��, ����, ����[, ����][,����][,��������]) */
/* ȣ�⿹ : <script>flashWrite('./swf/main_mv.swf?','463','183')</script> */
function swf(url,w,h,vars,bg,win){
	var id=url.split("/")[url.split("/").length-1].split(".")[0]; //id�� ���ϸ����� ����
	if(vars==null) vars='';
	if(bg==null) bg='#FFFFFF';
	if(win==null) win='transparent';


	// �÷��� �ڵ� ����
	var flashStr= "	<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000'";
		flashStr+="			codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0'";
		flashStr+="			width='"+w+"'";
		flashStr+="			height='"+h+"'";
		flashStr+="			id='"+id+"'";
		flashStr+="			align='middle'>";

		flashStr+="		<param name='allowScriptAccess' value='always' />";
		flashStr+="		<param name='movie' value='"+url+"' />";
		flashStr+="		<param name='FlashVars' value='"+vars+"' />";
		flashStr+="		<param name='wmode' value='"+win+"' />";
		flashStr+="		<param name='menu' value='false' />";
		flashStr+="		<param name='quality' value='high' />";
		flashStr+="		<param name='bgcolor' value='"+bg+"' />";
	
		flashStr+="		<embed src='"+url+"'";
		flashStr+="		       flashVars='"+vars+"'";
		flashStr+="		       wmode='"+win+"'";
		flashStr+="		       menu='false'";
		flashStr+="		       quality='high'";
		flashStr+="		       bgcolor='"+bg+"'";
		flashStr+="		       width='"+w+"'";
		flashStr+="		       height='"+h+"'";
		flashStr+="		       name='"+id+"'";
		flashStr+="		       align='middle'";
		flashStr+="		       allowScriptAccess='always'";
		flashStr+="		       type='application/x-shockwave-flash'";
		flashStr+="		       pluginspage='http://www.macromedia.com/go/getflashplayer' />";
		flashStr+=" </object>";

	// �÷��� �ڵ� ���
	document.write(flashStr);
}

// ��� ��ũ�� img �±׿� onfocus=blur() ó��
function bluring(){ 
if(event.srcElement.tagName=="A"||event.srcElement.tagName=="IMG") document.body.focus(); 
} 
document.onfocusin=bluring; 
 
function call_img(image,i) 
{
	eval("img"+i+".filters[0].Apply()");
	eval("img"+i+".src=image");
	eval("img"+i+".filters[0].Play()");
}

function bookmark(){
window.external.AddFavorite('http://tao2korea.com', 'Ÿ�����ڸ���')
}
//��ũ��Ʈ ��-->
