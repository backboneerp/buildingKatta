export class ApplicationRoutes{
    public static readonly ADMIN_LOGIN="admin-login";
    public static readonly ADMIN_HOMEPAGE="admin-homepage";
    public static readonly VENDOR_MANAGEMENT="vendor-management";
    public static readonly ASSET_MANAGEMENT="asset-management";
    public static readonly ROLE_MANAGEMENT="role-management";
    public static readonly VISITOR_MANAGEMENT="visitor-management";
    public static readonly PARKING_MANAGEMENT="parking-management";
    public static readonly ADMINISTRATION_MANAGEMENT="administration";
    public static readonly ACCOUNTING_MANAGEMENT="accounting";
    public static readonly USER_MANAGEMET="user-management";
    public static readonly RECEIPT="receipt";
    public static readonly VOUCHER="voucher";
    public static readonly CREATE_SALES = 'create-sales';
    public static readonly CREATE_RECEIPT = 'create-receipt';
    public static readonly FLAT_MANAGEMENT="flat-managemet";
    public static readonly SERVICE_MANAGEMENT="service-management";
    public static readonly SOCIETY_MANAGEMENT="society-management";
    public static readonly SOCIETY_CONFIGURATION = 'society-configuration';
    public static readonly REPORTS = 'reports';
    public static readonly SIGNING = 'signin';
    public static readonly SIGNUP = 'signup';
    public static readonly FORGOT_PASSWORD="forgot-password";
    public static readonly CREATE_ACCOUNT="create-account";
    public static readonly RESET_PASSWORD="reset-password";
    public static readonly SETTINGS="settings";
    public static readonly PAGE_NOT_FOUND="_404";
    public static readonly ERROR_PAGE="_500";
    public static readonly REDIRECT_TO_ADMIN_LOGIN="/"+ApplicationRoutes.ADMIN_LOGIN;
}