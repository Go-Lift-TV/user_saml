OC.L10N.register(
    "user_saml",
    {
    "Saved" : "Сачувано",
    "X.509 certificate of the Service Provider" : "X.509 сертификат добављача услуга",
    "Private key of the Service Provider" : "Приватни кључ добављача услуга",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Назначава да ће се nameID од <samlp:logoutRequest> који шаље добављач услуга бити шифрован.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Назначава да ли ће <samlp:AuthnRequest> поруке које шаље добављач услуга бити потписане. [метаподаци овог добављача услуга ће понудити ову информацију]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Назначава да ли ће <samlp:logoutRequest> поруке које шаље добављач услуга бити потписане.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Назначава да ли ће <samlp:logoutResponse> поруке које шаље добављач услуга бити потписане.",
    "Whether the metadata should be signed." : "Да ли метаподаци треба да буду потписани.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Назначава захтев да <samlp:Response>, <samlp:LogoutRequest> и <samlp:LogoutResponse> елементи које прима овај добављач услуга буду потписани.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Назначава захтев да <saml:Assertion> елемент који прима овај добављач услуга буде потписан. [метаподаци овог добављача услуга ће понудити ову информацију]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Назначава захтев да <saml:Assertion> елемент који прима овај добављач услуга буде шифрован.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Назначава захтев да NameID елемент који прима овај добављач услуга буде у поруци.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Назначава захтев да NameID елемент који прима овај добављач услуга буде шифрован.",
    "Indicates if the SP will validate all received XML." : "Назначава да ли ће добављач услуга валидирати сав примљени XML.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS URL-Енкодује SAML податке малим словима, а тулкит подразумевано користи велика слова. Укључити за ADFS компатибилност при верификацији потписа.",
    "Attribute to map the UID to." : "Атрибут на који се UID мапира.",
    "Only allow authentication if an account exists on some other backend. (e.g. LDAP)" : "Дозволи проверу идентитета само ако налог постоји на неком другом позадинском механизму (нпр. LDAP)",
    "Attribute to map the displayname to." : "Атрибут на који се displayname мапира.",
    "Attribute to map the email address to." : "Атрибут на који се мапира адреса е-поште.",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Користи SAML проверу идентитета за %s десктоп клијенте (захтева поновну проверу идентитета)",
    "SSO & SAML authentication" : "SSO & SAML провера идентитета",
    "Open documentation" : "Отвори документацију",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Одаберите желите ли да обавите проверу идентитета користећи SAML добављача уграђеног у Некстклауд или преко променљиве окружења.",
    "Use built-in SAML authentication" : "Користи уграђени SAML проверу идентитета",
    "Use environment variable" : "Користи променљиву окружења",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore." : "Постарајте се да подесите административног корисника који може да приступи инстанци преко SSO-а. Пријава преко обичног %s налога неће виши бити могућа.",
    "General" : "Опште",
    "Service Provider Data" : "Подаци добављача услуга",
    "If your Service Provider should use certificates you can optionally specify them here." : "Ако Ваш добављач услуга користи сертификате, можете их опционо навести овде.",
    "Show Service Provider settings…" : "Прикажи поставке добављача услуга…",
    "Identity Provider Data" : "Подаци добављача идентитета",
    "Configure your IdP settings here." : "Подесите добављача идентитета овде.",
    "Identifier of the IdP entity (must be a URI)" : "Идентификација ентитета добављача идентитета (мора бити URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "URL одредиште добављача идентитета где ће добављач услуга слати Authentication Request Message",
    "Show optional Identity Provider settings…" : "Прикажи опционе поставке добављача идентитета…",
    "Show security settings…" : "Прикажи безбедоносне поставке…",
    "Signatures and encryption offered" : "Понуђено потписи и шифровање",
    "Signatures and encryption required" : "Захтевани потписи и шифровање",
    "Download metadata XML" : "Скини XML метаподатака",
    "Metadata invalid" : "Метаподаци неисправни",
    "Metadata valid" : "Метаподаци исправни"
},
"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);");
