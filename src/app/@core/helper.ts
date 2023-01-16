import Swal from "sweetalert2";

export function sweetAlert(rules: any): any {
    Swal.fire({
      title: rules.title,
      text: rules.text,
      html: rules.html,
      icon: rules.icon,
      showCancelButton: rules.showCancelButton,
      confirmButtonColor: rules.confirmButtonColor,
      cancelButtonColor: rules.cancelButtonColor,
      confirmButtonText: rules.confirmButtonText || 'OK'
    }).then((result: any) => {
        if (result.isConfirmed) {
            if (rules.action){
                return rules.action(result);
            }else{
                return true;
            }
        }
    });
}
