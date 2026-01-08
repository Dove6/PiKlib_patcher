var sheetParser = (function () {
    // debug
    const debug = true;

    const data = {
        'games': [
            {
                'id': '1',
                'name': 'Reksio i Skarb Piratów',
                'acronym': 'RiSP',
                'comment': ''
            },
            {
                'id': '2',
                'name': 'Reksio i UFO',
                'acronym': 'RiU',
                'comment': ''
            },
            {
                'id': '3',
                'name': 'Reksio i Czarodzieje',
                'acronym': 'RiC',
                'comment': ''
            },
            {
                'id': '4',
                'name': 'Reksio i Wehikuł Czasu',
                'acronym': 'RiWC',
                'comment': ''
            },
            {
                'id': '5',
                'name': 'Reksio i Kapitan Nemo',
                'acronym': 'RiKN',
                'comment': ''
            },
            {
                'id': '6',
                'name': 'Reksio i Kretes w Akcji!',
                'acronym': 'RiKwA',
                'comment': ''
            },
            {
                'id': '7',
                'name': 'Wesołe Przedszkole Reksia',
                'acronym': 'WPR',
                'comment': ''
            },
            {
                'id': '8',
                'name': 'ABC z Reksiem',
                'acronym': 'ABCzR',
                'comment': ''
            },
            {
                'id': '9',
                'name': 'Kopciuszek',
                'acronym': 'Kc',
                'comment': ''
            },
            {
                'id': '10',
                'name': 'Księga Dżungli',
                'acronym': 'KD',
                'comment': ''
            },
            {
                'id': '11',
                'name': 'Piotruś Pan',
                'acronym': 'PP',
                'comment': ''
            },
            {
                'id': '12',
                'name': 'Robin Hood',
                'acronym': 'RH',
                'comment': ''
            },
            {
                'id': '13',
                'name': 'Smokule - Język Angielski',
                'acronym': 'SJA',
                'comment': ''
            },
            {
                'id': '14',
                'name': 'Wielki Turniej Wiedzy o Sporcie',
                'acronym': 'WTWoS',
                'comment': ''
            },
            {
                'id': '15',
                'name': 'Zamek 1000 Pytań',
                'acronym': 'Z1000P',
                'comment': ''
            }
        ],
        'libraries': [
            {
                'id': '1',
                'name': 'PIKLib61.dll',
                'checksum': '715272459E13BD77749B2634356B3F3B8A86015E',
                'comment': '?lib_1st_ver',
                'game_id': '1'
            },
            {
                'id': '2',
                'name': 'PIKLIB8.dll',
                'checksum': '87C5CA97F599B6B793AE299A6ACD8F70CF4DB640',
                'comment': '?lib_updated_2004',
                'game_id': '1'
            },
            {
                'id': '3',
                'name': 'PIKLib71.dll',
                'checksum': '128B235B6D9466A27E8A6EAD2DE20D98020222C8',
                'comment': '?lib_1st_ver',
                'game_id': '2'
            },
            {
                'id': '4',
                'name': 'Piklib8.dll',
                'checksum': 'EDFCF8680BA29AB20E22191CFEF187BA888E7FD7',
                'comment': '?lib_updated_2004',
                'game_id': '2'
            },
            {
                'id': '5',
                'name': 'Piklib8.dll',
                'checksum': 'A70F97E970C6301166E90E8872F499DA59961464',
                'comment': '',
                'game_id': '3'
            },
            {
                'id': '6',
                'name': 'bloomoodll.dll',
                'checksum': '2679920B3735624D746FDF24D7BB507A23B31A08',
                'comment': '',
                'game_id': '4'
            },
            {
                'id': '7',
                'name': 'bloomoodll.dll',
                'checksum': '3BE911183E59FEC67A388654E1A68B77C00BDF15',
                'comment': '',
                'game_id': '5'
            },
            {
                'id': '8',
                'name': 'bloomoodll.dll',
                'checksum': 'FB9A2B81D685F7C9B03DA30644D990603D4F7A70',
                'comment': '',
                'game_id': '6'
            },
            {
                'id': '9',
                'name': 'PIKLIB8.dll',
                'checksum': '130BD02553829B28FAE9757A82E24881C5B6E4F2',
                'comment': '?lib_cdp_ver',
                'game_id': '3'
            },
            {
                'id': '10',
                'name': 'PIKLIB8.dll',
                'checksum': '5C61507C372F12AD1A867C57F2C5A0C14E482F7E',
                'comment': '?lib_KIDS_ver',
                'game_id': '2'
            },
            {
                'id': '11',
                'name': 'PIKLIB8.dll',
                'checksum': '5032FDF8EA80DA4030F01C15C686AE46990062E7',
                'comment': '?lib_cdp_ver',
                'game_id': '1'
            },
            {
                'id': '12',
                'name': 'BlooMooDLL.dll',
                'checksum': 'F352210C32D8C224C0B7611D6BE1277367BA0464',
                'comment': '?lib_PR_mag_ver',
                'game_id': '4'
            },
            {
                'id': '13',
                'name': 'bloomoodll.dll',
                'checksum': 'E2BD2C6CCC68E5430ABD0F0D54048D8C16007D18',
                'comment': '?lib_cdp_ver',
                'game_id': '6'
            },
            {
                'id': '14',
                'name': 'PIKLIB8.dll',
                'checksum': '9FE73F7DCA5ABF7BEFE16216CF5BA54A9E68281B',
                'comment': '?lib_cdp_ver',
                'game_id': '2'
            },
            {
                'id': '15',
                'name': 'bloomoodll.dll',
                'checksum': '836AD62F9F97FA90A07F7282820A1CA0E092B228',
                'comment': '?lib_cdp_ver',
                'game_id': '5'
            },
            {
                'id': '16',
                'name': 'BlooMooDLL.dll',
                'checksum': '698B863D50C137BA7F3E8D3BF92EAB9B2D419383',
                'comment': '?lib_rus_ver',
                'game_id': '6'
            },
            {
                'id': '17',
                'name': 'bloomoodll.dll',
                'checksum': '985DDCACC8AA8949118DF6D9703BB58CBDD21BBD',
                'comment': '?lib_AM_published',
                'game_id': '6'
            },
            {
                'id': '18',
                'name': 'PIKLIB8.dll',
                'checksum': '5F6CBB33576D4F5493F141DDEE70CD108EA0F9D5',
                'comment': '?lib_riu_rims_ver',
                'game_id': '2'
            },
            {
                'id': '19',
                'name': 'PIKLIB8.dll',
                'checksum': '33CFD6523C0445F549E989739C58E8AA10329A87',
                'comment': '',
                'game_id': '7'
            },
            {
                'id': '20',
                'name': 'PIKLIB8.dll',
                'checksum': 'C5B899F8FA93620A902DA117849289A542E3AF3E',
                'comment': '?lib_rom_ver',
                'game_id': '2'
            },
            {
                'id': '21',
                'name': 'PIKLIB41.dll',
                'checksum': '0CF39B1927934954E02FFAD9444F6B5E1AF11A95',
                'comment': '2009',
                'game_id': '8'
            },
            {
                'id': '22',
                'name': 'BlooMooDLL.dll',
                'checksum': '4EB825248B908062DF1E4250861C2B9FF29A35FB',
                'comment': 'oryginał',
                'game_id': '9'
            },
            {
                'id': '23',
                'name': 'PIKLIB8.dll',
                'checksum': '96A2E507476FC9FE3532F9B04CB735BD6EB41847',
                'comment': '',
                'game_id': '10'
            },
            {
                'id': '24',
                'name': 'PIKLIB8.dll',
                'checksum': 'C6E4D51EF8105C3480703E0FFF48F2D27E1C0599',
                'comment': 'Wersja z KŚ Gry dla dzieci',
                'game_id': '11'
            },
            {
                'id': '25',
                'name': 'PIKLIB8.dll',
                'checksum': '5F169305D8B048EBB7E9615F2147E41FAAB323C5',
                'comment': 'oryginał',
                'game_id': '12'
            },
            {
                'id': '26',
                'name': 'PIKLIB60.dll',
                'checksum': '383997AF2344C3B0F8DBD0636F558C4A476F6831',
                'comment': 'Wersja z KŚ Gry dla dzieci',
                'game_id': '13'
            },
            {
                'id': '27',
                'name': 'PIKLIB8.dll',
                'checksum': '8C905EF367364D9C0805FCB85AA12594DEB0A833',
                'comment': 'Wersja z KŚ Gry dla dzieci',
                'game_id': '7'
            },
            {
                'id': '28',
                'name': 'PIKLIB42.dll',
                'checksum': '99EDB90CD1092C2A9D8A3F5AB317792881A84707',
                'comment': 'Wersja z KŚ Gry dla dzieci',
                'game_id': '14'
            },
            {
                'id': '29',
                'name': 'PIKLIB42.dll',
                'checksum': '71B084F341F1C09490FF04CF1A912C541EABC2F9',
                'comment': 'wersja pudełkowa',
                'game_id': '15'
            },
            {
                'id': '30',
                'name': 'PIKLIB42.dll',
                'checksum': 'B4C8A66A3A7A28B61A921A1EB4F1873C2164E921',
                'comment': 'Wersja z KŚ Gry dla dzieci',
                'game_id': '15'
            }
        ],
        'patches': [
            {
                'id': '1',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': 'DEE4E20D67C0BC73E6089769254D3FF039CA20E7',
                'is_valid': 'true',
                'data': '0000b6ad: 2e  .\n0000b6bc: 66  f\n0000b6bd: 90  .\n0000b6e1: eb  .\n000a1140: 2e  .\n000a1141: 5c  \\\n000a1142: 00  .',
                'comment': '',
                'library_id': '1'
            },
            {
                'id': '2',
                'name': 'debug log',
                'description': '?pat_log_file_desc',
                'modified_checksum': '6A300B2A0985B4C09DBCFF28FF94BE1E0FFF4EEA',
                'is_valid': 'false',
                'data': '00046db0: 31  1\n00046db1: c0  .\n00046db2: b0  .\n00046db3: 01  .',
                'comment': '?pat_only_CXObject_log_com',
                'library_id': '1'
            },
            {
                'id': '3',
                'name': 'debug log 2',
                'description': '?pat_log_file_desc',
                'modified_checksum': '9B33DF25C316FE927D3293A83AC4EF490E069CA7',
                'is_valid': 'true',
                'data': '00063a03: 66  f\n00063a04: 90  .',
                'comment': 'CWindow::toLog',
                'library_id': '1'
            },
            {
                'id': '4',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': '69298624C0E065711688767DBBCA3CB160941D2F',
                'is_valid': 'true',
                'data': '0000bf83: 2e  .\n0000bf92: 66  f\n0000bf93: 90  .\n0000bfab: eb  .\n000f2114: 2e  .\n000f2115: 5c  \\\n000f2116: 00  .',
                'comment': '',
                'library_id': '3'
            },
            {
                'id': '5',
                'name': 'debug log',
                'description': '?pat_log_file_desc',
                'modified_checksum': '30EC0394BCED6A2F27FF54B57E98890F4EE83E56',
                'is_valid': 'true',
                'data': '000a5a36: 66  f\n000a5a37: 0f  .\n000a5a38: 1f  .\n000a5a39: 44  D',
                'comment': 'CWindow::toLog',
                'library_id': '3'
            },
            {
                'id': '6',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': '2CA380A515673D316B03F5625F2DE2B9BD017C1C',
                'is_valid': 'true',
                'data': '0000dd9e: 2e  .\n0000ddad: 66  f\n0000ddae: 90  .\n0000ddc6: eb  .\n0000ddee: 66  f\n0000ddef: 90  .\n00022666: cc  .\n00022667: 6b  k\n000c6af9: cc  .\n000c6afa: 6b  k\n00146454: 2e  .\n00146455: 5c  \\\n00146456: 00  .\n00146bcc: 78  x\n00146bcd: 3a  :\n00146bce: 5c  \\',
                'comment': '',
                'library_id': '4'
            },
            {
                'id': '7',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': '7831CD31E322EBAF1621A03F080F3AC506DBE6E4',
                'is_valid': 'false',
                'data': '0000ddee: 2e  .\n0000ddfd: 66  f\n0000ddfe: 90  .\n0000de16: eb  .\n0000de3e: 66  f\n0000de3f: 90  .\n00108394: 2e  .\n00108395: 5c  \\\n00108396: 00  .',
                'comment': '',
                'library_id': '5'
            },
            {
                'id': '8',
                'name': 'debug output',
                'description': '?pat_dbg_out_desc',
                'modified_checksum': '46B80EA2F29CFEBF63991259413A60A5329275BD',
                'is_valid': 'true',
                'data': '000e2080: eb  .\n000e2081: 21  !\n000e2082: 8b  .\n000e2083: 44  D\n000e2084: 24  $\n000e2085: 10  .\n000e2086: 50  P\n000e2087: ff  .\n000e2088: 15  .\n000e2089: 80  .\n000e208a: 71  q\n000e208b: 10  .\n000e208c: 10  .\n000e208d: 59  Y\n000e208e: c3  .\n000e20a3: 8b  .\n000e20a4: 44  D\n000e20a5: 24  $\n000e20a6: 10  .\n000e20a7: 50  P\n000e20a8: ff  .\n000e20a9: 15  .\n000e20aa: b8  .\n000e20ab: 70  p\n000e20ac: 10  .\n000e20ad: 10  .\n000e20ae: eb  .\n000e20af: d2  .',
                'comment': '',
                'library_id': '5'
            },
            {
                'id': '9',
                'name': 'no-CD 2',
                'description': '?pat_no_CD_desc',
                'modified_checksum': '8FE5F1834E3A21C6C49C745C3967BE0BE4C48521',
                'is_valid': 'true',
                'data': '0000ddee: 2e  .\n0000ddfd: 66  f\n0000ddfe: 90  .\n0000de16: eb  .\n0000de3e: 66  f\n0000de3f: 90  .\n000c1399: dc  .\n000c139a: 8a  .\n00108394: 2e  .\n00108395: 5c  \\\n00108396: 00  .\n00108adc: 78  x\n00108add: 3a  :\n00108ade: 5c  \\',
                'comment': '?pat_fixed_ver1_com',
                'library_id': '5'
            },
            {
                'id': '10',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': '8140D874C13137A00369E816E88DB923FC1A6337',
                'is_valid': 'true',
                'data': '000170fc: 2e  .\n000170fd: 5c  \\\n000170fe: 00  .\n00017185: 2e  .\n00017194: 66  f\n00017195: 90  .\n000171ad: eb  .\n000171d5: 66  f\n000171d6: 90  .\n001930e8: 2e  .\n001930e9: 5c  \\\n001930ea: 00  .',
                'comment': '',
                'library_id': '7'
            },
            {
                'id': '11',
                'name': 'debug output',
                'description': '?pat_dbg_out_desc',
                'modified_checksum': 'A38B19B5A56E735A681806FF79EC81F49AF8E9DB',
                'is_valid': 'true',
                'data': '001024d0: eb  .\n001024d1: 16  .\n001024d2: 8b  .\n001024d3: 44  D\n001024d4: 24  $\n001024d5: 10  .\n001024d6: 50  P\n001024d7: ff  .\n001024d8: 15  .\n001024d9: 3c  <\n001024da: 0c  .\n001024db: 54  T\n001024dc: 10  .\n001024dd: 59  Y\n001024de: c3  .\n001024e8: 8b  .\n001024e9: 44  D\n001024ea: 24  $\n001024eb: 10  .\n001024ec: 50  P\n001024ed: eb  .\n001024ee: 09  .\n001024f8: ff  .\n001024f9: 15  .\n001024fa: b8  .\n001024fb: 0a  .\n001024fc: 54  T\n001024fd: 10  .\n001024fe: eb  .\n001024ff: d2  .',
                'comment': '',
                'library_id': '7'
            },
            {
                'id': '12',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': '735F37A685E3D19EEFE8454618C2500522BD85C6',
                'is_valid': 'true',
                'data': '00000178: 00  .\n00000179: 00  .\n0000017a: 00  .\n000001b9: 00  .\n000001ba: 00  .\n000001bc: 00  .\n000001bd: 00  .\n0000ddee: 2e  .\n0000ddfd: 66  f\n0000ddfe: 90  .\n0000de16: eb  .\n0000de3e: 66  f\n0000de3f: 90  .\n000c1399: dc  .\n000c139a: 8a  .\n00108394: 2e  .\n00108395: 5c  \\\n00108396: 00  .\n00108adc: 78  x\n00108add: 3a  :\n00108ade: 5c  \\',
                'comment': '',
                'library_id': '9'
            },
            {
                'id': '13',
                'name': 'debug output',
                'description': '?pat_dbg_out_desc',
                'modified_checksum': 'A951729296CCF4D1DDB8D34E32FB6487E7F963B4',
                'is_valid': 'true',
                'data': '00000178: 00  .\n00000179: 00  .\n0000017a: 00  .\n000001b9: 00  .\n000001ba: 00  .\n000001bc: 00  .\n000001bd: 00  .\n000e2080: eb  .\n000e2081: 21  !\n000e2082: 8b  .\n000e2083: 44  D\n000e2084: 24  $\n000e2085: 10  .\n000e2086: 50  P\n000e2087: ff  .\n000e2088: 15  .\n000e2089: 80  .\n000e208a: 71  q\n000e208b: 10  .\n000e208c: 10  .\n000e208d: 59  Y\n000e208e: c3  .\n000e20a3: 8b  .\n000e20a4: 44  D\n000e20a5: 24  $\n000e20a6: 10  .\n000e20a7: 50  P\n000e20a8: ff  .\n000e20a9: 15  .\n000e20aa: b8  .\n000e20ab: 70  p\n000e20ac: 10  .\n000e20ad: 10  .\n000e20ae: eb  .\n000e20af: d2  .',
                'comment': '',
                'library_id': '9'
            },
            {
                'id': '14',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': '2DDAD0DCA7F88E6DF7D5BEFCF458BFF2FC5CC21D',
                'is_valid': 'true',
                'data': '00000180: 00  .\n00000182: 00  .\n000001c1: 00  .\n000001c2: 00  .\n000001c4: 00  .\n000001c5: 00  .\n0000dd9e: 2e  .\n0000ddad: 66  f\n0000ddae: 90  .\n0000ddc6: eb  .\n0000ddee: 66  f\n0000ddef: 90  .\n00022666: cc  .\n00022667: 6b  k\n000c6af9: cc  .\n000c6afa: 6b  k\n00146454: 2e  .\n00146455: 5c  \\\n00146456: 00  .\n00146bcc: 78  x\n00146bcd: 3a  :\n00146bce: 5c  \\',
                'comment': '',
                'library_id': '10'
            },
            {
                'id': '15',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': '5174948AE8DBA29A41900C1DDA31884B53E7A363',
                'is_valid': 'true',
                'data': '0000d9f0: 54  T\n0000d9f1: d8  .\n0000da46: 54  T\n0000da47: d8  .\n0000da7c: 54  T\n0000da7d: d8  .\n0000dade: 2e  .\n0000daed: 66  f\n0000daee: 90  .\n0000db06: eb  .\n0000db2e: 66  f\n0000db2f: 90  .\n0016d854: 2e  .\n0016d855: 5c  \\',
                'comment': '',
                'library_id': '6'
            },
            {
                'id': '16',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': '75C3A44356EAB1059CE7B38DE8464B82E4E74A1B',
                'is_valid': 'true',
                'data': '00000178: 00  .\n00000179: 00  .\n0000017a: 00  .\n000001b9: 00  .\n000001ba: 00  .\n000001bc: 00  .\n000001bd: 00  .\n0000d9f0: 54  T\n0000d9f1: d8  .\n0000da46: 54  T\n0000da47: d8  .\n0000da7c: 54  T\n0000da7d: d8  .\n0000dade: 2e  .\n0000daed: 66  f\n0000daee: 90  .\n0000db06: eb  .\n0000db2e: 66  f\n0000db2f: 90  .\n0016d854: 2e  .\n0016d855: 5c  \\',
                'comment': '',
                'library_id': '12'
            },
            {
                'id': '17',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': '427A8C5A3EC5B2DBC7773CB2565F171C70D284C5',
                'is_valid': 'true',
                'data': '0000dcb0: dc  .\n0000dcb1: 6b  k\n0000dd06: dc  .\n0000dd07: 6b  k\n0000dd3c: dc  .\n0000dd3d: 6b  k\n0000dd9e: 2e  .\n0000ddad: 66  f\n0000ddae: 90  .\n0000ddc6: eb  .\n0000ddee: 66  f\n0000ddef: 90  .\n00146bdc: 2e  .\n00146bdd: 5c  \\',
                'comment': '',
                'library_id': '2'
            },
            {
                'id': '18',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': 'EADEC0CE0D071CEA1FD8168FDF0D2F6C91EF9FC9',
                'is_valid': 'true',
                'data': '00000180: 00  .\n00000181: 00  .\n00000182: 00  .\n000001c1: 00  .\n000001c2: 00  .\n000001c4: 00  .\n000001c5: 00  .\n0000dcb0: dc  .\n0000dcb1: 6b  k\n0000dd06: dc  .\n0000dd07: 6b  k\n0000dd3c: dc  .\n0000dd3d: 6b  k\n0000dd9e: 2e  .\n0000ddad: 66  f\n0000ddae: 90  .\n0000ddc6: eb  .\n0000ddee: 66  f\n0000ddef: 90  .\n00146bdc: 2e  .\n00146bdd: 5c  \\',
                'comment': '',
                'library_id': '11'
            },
            {
                'id': '19',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': '0C8380ED628C5B2CA908502673A0C4B475C4775E',
                'is_valid': 'true',
                'data': '0001718c: 2e  .\n0001718d: 5c  \\\n0001718e: 00  .\n00017215: 2e  .\n00017224: 66  f\n00017225: 90  .\n0001723d: eb  .\n00017265: 66  f\n00017266: 90  .\n001930f0: 2e  .\n001930f1: 5c  \\\n001930f2: 00  .',
                'comment': '',
                'library_id': '8'
            },
            {
                'id': '20',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': '7D62672A01EA6D5D572EB3667443906D87A0F5A2',
                'is_valid': 'true',
                'data': '00000160: 00  .\n00000161: 00  .\n00000162: 00  .\n000001a1: 00  .\n000001a2: 00  .\n000001a4: 00  .\n000001a5: 00  .\n0001718c: 2e  .\n0001718d: 5c  \\\n0001718e: 00  .\n00017215: 2e  .\n00017224: 66  f\n00017225: 90  .\n0001723d: eb  .\n00017265: 66  f\n00017266: 90  .\n001930f0: 2e  .\n001930f1: 5c  \\\n001930f2: 00  .',
                'comment': '',
                'library_id': '13'
            },
            {
                'id': '21',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': '2275A7B197DBEC270612D94514AAF78F208A425D',
                'is_valid': 'true',
                'data': '00000180: 00  .\n00000181: 00  .\n00000182: 00  .\n000001c1: 00  .\n000001c2: 00  .\n000001c4: 00  .\n000001c5: 00  .\n0000dd9e: 2e  .\n0000ddad: 66  f\n0000ddae: 90  .\n0000ddc6: eb  .\n0000ddee: 66  f\n0000ddef: 90  .\n00022666: cc  .\n00022667: 6b  k\n000c6af9: cc  .\n000c6afa: 6b  k\n00146454: 2e  .\n00146455: 5c  \\\n00146456: 00  .\n00146bcc: 78  x\n00146bcd: 3a  :\n00146bce: 5c  \\',
                'comment': '',
                'library_id': '14'
            },
            {
                'id': '22',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': 'D36101CFF72AD85FE7CEA4BD79AC7030C5A5CA74',
                'is_valid': 'true',
                'data': '00000160: 00  .\n00000161: 00  .\n00000162: 00  .\n000001a1: 00  .\n000001a2: 00  .\n000001a4: 00  .\n000001a5: 00  .\n000170fc: 2e  .\n000170fd: 5c  \\\n000170fe: 00  .\n00017185: 2e  .\n00017194: 66  f\n00017195: 90  .\n000171ad: eb  .\n000171d5: 66  f\n000171d6: 90  .\n001930e8: 2e  .\n001930e9: 5c  \\\n001930ea: 00  .',
                'comment': '',
                'library_id': '15'
            },
            {
                'id': '23',
                'name': 'debug output',
                'description': '?pat_dbg_out_desc',
                'modified_checksum': '248DA59366F68E9FF7172CDE76C44644643A496B',
                'is_valid': 'true',
                'data': '00000160: 00  .\n00000161: 00  .\n00000162: 00  .\n000001a1: 00  .\n000001a2: 00  .\n000001a4: 00  .\n000001a5: 00  .\n001024d0: eb  .\n001024d1: 16  .\n001024d2: 8b  .\n001024d3: 44  D\n001024d4: 24  $\n001024d5: 10  .\n001024d6: 50  P\n001024d7: ff  .\n001024d8: 15  .\n001024d9: 3c  <\n001024da: 0c  .\n001024db: 54  T\n001024dc: 10  .\n001024dd: 59  Y\n001024de: c3  .\n001024e8: 8b  .\n001024e9: 44  D\n001024ea: 24  $\n001024eb: 10  .\n001024ec: 50  P\n001024ed: eb  .\n001024ee: 09  .\n001024f8: ff  .\n001024f9: 15  .\n001024fa: b8  .\n001024fb: 0a  .\n001024fc: 54  T\n001024fd: 10  .\n001024fe: eb  .\n001024ff: d2  .',
                'comment': '',
                'library_id': '15'
            },
            {
                'id': '24',
                'name': 'debug output',
                'description': '?pat_dbg_out_desc',
                'modified_checksum': '90AE3090CC4EBD23530E774B41E21CA9E8C4F84B',
                'is_valid': 'true',
                'data': '00102d40: ff  .\n00102d41: 15  .\n00102d42: c4  .\n00102d43: ea  .\n00102d44: 53  S\n00102d45: 10  .\n00102d46: 8b  .\n00102d47: 44  D\n00102d48: 24  $\n00102d49: 10  .\n00102d4a: 50  P\n00102d4b: eb  .\n00102d4c: 0b  .\n00102d55: eb  .\n00102d56: e9  .\n00102d57: cc  .\n00102d58: ff  .\n00102d59: 15  .\n00102d5a: 44  D\n00102d5b: ec  .\n00102d5c: 53  S\n00102d5d: 10  .\n00102d5e: 59  Y\n00102d5f: c3  .',
                'comment': '',
                'library_id': '8'
            },
            {
                'id': '25',
                'name': 'debug output',
                'description': '?pat_dbg_out_desc',
                'modified_checksum': 'B13A1DCD04149C21FDB80C29540BF0395E0B5CAA',
                'is_valid': 'true',
                'data': '00000160: 00  .\n00000161: 00  .\n00000162: 00  .\n000001a1: 00  .\n000001a2: 00  .\n000001a4: 00  .\n000001a5: 00  .\n00102d40: ff  .\n00102d41: 15  .\n00102d42: c4  .\n00102d43: ea  .\n00102d44: 53  S\n00102d45: 10  .\n00102d46: 8b  .\n00102d47: 44  D\n00102d48: 24  $\n00102d49: 10  .\n00102d4a: 50  P\n00102d4b: eb  .\n00102d4c: 0b  .\n00102d55: eb  .\n00102d56: e9  .\n00102d57: cc  .\n00102d58: ff  .\n00102d59: 15  .\n00102d5a: 44  D\n00102d5b: ec  .\n00102d5c: 53  S\n00102d5d: 10  .\n00102d5e: 59  Y\n00102d5f: c3  .',
                'comment': '',
                'library_id': '13'
            },
            {
                'id': '26',
                'name': 'debug output',
                'description': '?pat_dbg_out_desc',
                'modified_checksum': 'BF5DA31B19370A99E91E75CBD03EE8ACFA4F11C5',
                'is_valid': 'true',
                'data': '000e78b8: ff  .\n000e78b9: 15  .\n000e78ba: 64  d\n000e78bb: 50  P\n000e78bc: 14  .\n000e78bd: 10  .\n000e78be: eb  .\n000e78bf: 18  .\n000e78c5: eb  .\n000e78c6: f1  .\n000e78c7: 90  .\n000e78c8: ff  .\n000e78c9: 15  .\n000e78ca: a8  .\n000e78cb: 51  Q\n000e78cc: 14  .\n000e78cd: 10  .\n000e78ce: 59  Y\n000e78cf: c3  .\n000e78d8: 8b  .\n000e78d9: 44  D\n000e78da: 24  $\n000e78db: 10  .\n000e78dc: 50  P\n000e78dd: eb  .\n000e78de: e9  .',
                'comment': '',
                'library_id': '2'
            },
            {
                'id': '27',
                'name': 'debug output',
                'description': '?pat_dbg_out_desc',
                'modified_checksum': '6A28F739C639E890458F608CF8FF097132971CB3',
                'is_valid': 'true',
                'data': '00000180: 00  .\n00000181: 00  .\n00000182: 00  .\n000001c1: 00  .\n000001c2: 00  .\n000001c4: 00  .\n000001c5: 00  .\n000e78b8: ff  .\n000e78b9: 15  .\n000e78ba: 64  d\n000e78bb: 50  P\n000e78bc: 14  .\n000e78bd: 10  .\n000e78be: eb  .\n000e78bf: 18  .\n000e78c5: eb  .\n000e78c6: f1  .\n000e78c7: 90  .\n000e78c8: ff  .\n000e78c9: 15  .\n000e78ca: a8  .\n000e78cb: 51  Q\n000e78cc: 14  .\n000e78cd: 10  .\n000e78ce: 59  Y\n000e78cf: c3  .\n000e78d8: 8b  .\n000e78d9: 44  D\n000e78da: 24  $\n000e78db: 10  .\n000e78dc: 50  P\n000e78dd: eb  .\n000e78de: e9  .',
                'comment': '',
                'library_id': '11'
            },
            {
                'id': '28',
                'name': 'debug output',
                'description': '?pat_dbg_out_desc',
                'modified_checksum': '7A0423366845F5754DC134F814AEDB54F7945505',
                'is_valid': 'true',
                'data': '000e78b8: ff  .\n000e78b9: 15  .\n000e78ba: 64  d\n000e78bb: 50  P\n000e78bc: 14  .\n000e78bd: 10  .\n000e78be: eb  .\n000e78bf: 18  .\n000e78c5: eb  .\n000e78c6: f1  .\n000e78c7: 90  .\n000e78c8: ff  .\n000e78c9: 15  .\n000e78ca: a8  .\n000e78cb: 51  Q\n000e78cc: 14  .\n000e78cd: 10  .\n000e78ce: 59  Y\n000e78cf: c3  .\n000e78d8: 8b  .\n000e78d9: 44  D\n000e78da: 24  $\n000e78db: 10  .\n000e78dc: 50  P\n000e78dd: eb  .\n000e78de: e9  .',
                'comment': '',
                'library_id': '4'
            },
            {
                'id': '29',
                'name': 'debug output',
                'description': '?pat_dbg_out_desc',
                'modified_checksum': '46997AACBCC74C64688A7D59F1AE008B9359C37C',
                'is_valid': 'true',
                'data': '00000180: 00  .\n00000182: 00  .\n000001c1: 00  .\n000001c2: 00  .\n000001c4: 00  .\n000001c5: 00  .\n000e78b8: ff  .\n000e78b9: 15  .\n000e78ba: 64  d\n000e78bb: 50  P\n000e78bc: 14  .\n000e78bd: 10  .\n000e78be: eb  .\n000e78bf: 18  .\n000e78c5: eb  .\n000e78c6: f1  .\n000e78c7: 90  .\n000e78c8: ff  .\n000e78c9: 15  .\n000e78ca: a8  .\n000e78cb: 51  Q\n000e78cc: 14  .\n000e78cd: 10  .\n000e78ce: 59  Y\n000e78cf: c3  .\n000e78d8: 8b  .\n000e78d9: 44  D\n000e78da: 24  $\n000e78db: 10  .\n000e78dc: 50  P\n000e78dd: eb  .\n000e78de: e9  .',
                'comment': '',
                'library_id': '10'
            },
            {
                'id': '30',
                'name': 'debug output',
                'description': '?pat_dbg_out_desc',
                'modified_checksum': 'DDFDF95450114261758427910ABCEF4CDF3EB10A',
                'is_valid': 'true',
                'data': '00000180: 00  .\n00000181: 00  .\n00000182: 00  .\n000001c1: 00  .\n000001c2: 00  .\n000001c4: 00  .\n000001c5: 00  .\n000e78b8: ff  .\n000e78b9: 15  .\n000e78ba: 64  d\n000e78bb: 50  P\n000e78bc: 14  .\n000e78bd: 10  .\n000e78be: eb  .\n000e78bf: 18  .\n000e78c5: eb  .\n000e78c6: f1  .\n000e78c7: 90  .\n000e78c8: ff  .\n000e78c9: 15  .\n000e78ca: a8  .\n000e78cb: 51  Q\n000e78cc: 14  .\n000e78cd: 10  .\n000e78ce: 59  Y\n000e78cf: c3  .\n000e78d8: 8b  .\n000e78d9: 44  D\n000e78da: 24  $\n000e78db: 10  .\n000e78dc: 50  P\n000e78dd: eb  .\n000e78de: e9  .',
                'comment': '',
                'library_id': '14'
            },
            {
                'id': '31',
                'name': 'debug output',
                'description': '?pat_dbg_out_desc',
                'modified_checksum': '3179FB1B8B3837F40C0BAD4FB736877DB10EA25D',
                'is_valid': 'true',
                'data': '000eac68: ff  .\n000eac69: 15  .\n000eac6a: c4  .\n000eac6b: 20   \n000eac6c: 11  .\n000eac6d: 10  .\n000eac6e: eb  .\n000eac6f: 18  .\n000eac75: eb  .\n000eac76: f1  .\n000eac77: 90  .\n000eac78: ff  .\n000eac79: 15  .\n000eac7a: a8  .\n000eac7b: 21  !\n000eac7c: 11  .\n000eac7d: 10  .\n000eac7e: 59  Y\n000eac7f: c3  .\n000eac88: 8b  .\n000eac89: 44  D\n000eac8a: 24  $\n000eac8b: 10  .\n000eac8c: 50  P\n000eac8d: eb  .\n000eac8e: e9  .',
                'comment': '',
                'library_id': '6'
            },
            {
                'id': '32',
                'name': 'debug output',
                'description': '?pat_dbg_out_desc',
                'modified_checksum': '7B85D08E29DCF0C4F08F768DE4558AFDF2D5E3D6',
                'is_valid': 'true',
                'data': '00000178: 00  .\n00000179: 00  .\n0000017a: 00  .\n000001b9: 00  .\n000001ba: 00  .\n000001bc: 00  .\n000001bd: 00  .\n000eac68: ff  .\n000eac69: 15  .\n000eac6a: c4  .\n000eac6b: 20   \n000eac6c: 11  .\n000eac6d: 10  .\n000eac6e: eb  .\n000eac6f: 18  .\n000eac75: eb  .\n000eac76: f1  .\n000eac77: 90  .\n000eac78: ff  .\n000eac79: 15  .\n000eac7a: a8  .\n000eac7b: 21  !\n000eac7c: 11  .\n000eac7d: 10  .\n000eac7e: 59  Y\n000eac7f: c3  .\n000eac88: 8b  .\n000eac89: 44  D\n000eac8a: 24  $\n000eac8b: 10  .\n000eac8c: 50  P\n000eac8d: eb  .\n000eac8e: e9  .',
                'comment': '',
                'library_id': '12'
            },
            {
                'id': '33',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': 'D6D19AE231D744FC17FD9F48D94FFBDDB26AC35B',
                'is_valid': 'true',
                'data': '0001718c: 2e  .\n0001718d: 5c  \\\n0001718e: 00  .\n00017215: 2e  .\n00017224: 66  f\n00017225: 90  .\n0001723d: eb  .\n00017265: 66  f\n00017266: 90  .\n001930f0: 2e  .\n001930f1: 5c  \\\n001930f2: 00  .',
                'comment': '',
                'library_id': '16'
            },
            {
                'id': '34',
                'name': 'debug output',
                'description': '?pat_dbg_out_desc',
                'modified_checksum': '057EB6C076FF681B2CFB10F77D0AB8DE1716750B',
                'is_valid': 'true',
                'data': '00102d40: ff  .\n00102d41: 15  .\n00102d42: c4  .\n00102d43: ea  .\n00102d44: 53  S\n00102d45: 10  .\n00102d46: 8b  .\n00102d47: 44  D\n00102d48: 24  $\n00102d49: 10  .\n00102d4a: 50  P\n00102d4b: eb  .\n00102d4c: 0b  .\n00102d55: eb  .\n00102d56: e9  .\n00102d57: cc  .\n00102d58: ff  .\n00102d59: 15  .\n00102d5a: 44  D\n00102d5b: ec  .\n00102d5c: 53  S\n00102d5d: 10  .\n00102d5e: 59  Y\n00102d5f: c3  .',
                'comment': '',
                'library_id': '16'
            },
            {
                'id': '35',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': '991444706FB8C3A8FCDBB8A2E70726A75A96F786',
                'is_valid': 'true',
                'data': '00000160: 00  .\n00000161: 00  .\n00000162: 00  .\n000001a1: 00  .\n000001a2: 00  .\n000001a4: 00  .\n000001a5: 00  .\n0001718c: 2e  .\n0001718d: 5c  \\\n0001718e: 00  .\n00017215: 2e  .\n00017224: 66  f\n00017225: 90  .\n0001723d: eb  .\n00017265: 66  f\n00017266: 90  .\n001930f0: 2e  .\n001930f1: 5c  \\\n001930f2: 00  .',
                'comment': '',
                'library_id': '17'
            },
            {
                'id': '36',
                'name': 'debug output',
                'description': '?pat_dbg_out_desc',
                'modified_checksum': 'DDF0938F01FAF3C744415E368EE69C9D10765E05',
                'is_valid': 'true',
                'data': '00000160: 00  .\n00000161: 00  .\n00000162: 00  .\n000001a1: 00  .\n000001a2: 00  .\n000001a4: 00  .\n000001a5: 00  .\n00102d40: ff  .\n00102d41: 15  .\n00102d42: c4  .\n00102d43: ea  .\n00102d44: 53  S\n00102d45: 10  .\n00102d46: 8b  .\n00102d47: 44  D\n00102d48: 24  $\n00102d49: 10  .\n00102d4a: 50  P\n00102d4b: eb  .\n00102d4c: 0b  .\n00102d55: eb  .\n00102d56: e9  .\n00102d57: cc  .\n00102d58: ff  .\n00102d59: 15  .\n00102d5a: 44  D\n00102d5b: ec  .\n00102d5c: 53  S\n00102d5d: 10  .\n00102d5e: 59  Y\n00102d5f: c3  .',
                'comment': '',
                'library_id': '17'
            },
            {
                'id': '37',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': '3B2340AFFE0E3E5F10533932AC5D5E337576A0F8',
                'is_valid': 'true',
                'data': '00000180: 00  .\n00000181: 00  .\n00000182: 00  .\n000001c1: 00  .\n000001c2: 00  .\n000001c5: 00  .\n0000dd9e: 2e  .\n0000ddad: 66  f\n0000ddae: 90  .\n0000ddc6: eb  .\n0000ddee: 66  f\n0000ddef: 90  .\n00022666: cc  .\n00022667: 6b  k\n000c6af9: cc  .\n000c6afa: 6b  k\n00146454: 2e  .\n00146455: 5c  \\\n00146456: 00  .\n00146bcc: 78  x\n00146bcd: 3a  :\n00146bce: 5c  \\',
                'comment': '',
                'library_id': '18'
            },
            {
                'id': '38',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': '96385469920157D1929786685C036AAF4A55CDA0',
                'is_valid': 'true',
                'data': '0000dcdf: e9  .\n0000dce0: 58  X\n0000dce1: 01  .\n0000dce2: 00  .\n0000dce3: 00  .\n0000de4c: 66  f\n0000de4d: 0f  .\n0000de4e: 1f  .\n0000de4f: 44  D\n0000de50: 00  .\n0000de51: 00  .\n0000de56: 0f  .\n0000de57: 1f  .\n0000de58: 40  @\n0000de59: 00  .\n0000de5b: b3  .\n0000de5c: 01  .',
                'comment': '',
                'library_id': '19'
            },
            {
                'id': '39',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': '452A029494A2BE787EE0A56A811D03358C5B8459',
                'is_valid': 'true',
                'data': '000101ce: 25  %\n000101dd: 66  f\n000101de: 90  .\n000101f6: eb  .\n0001021e: 66  f\n0001021f: 90  .',
                'comment': 'Prepared by Merciful Monarch',
                'library_id': '20'
            },
            {
                'id': '40',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': 'C852729222DE38F3B461AB424F3B5F4C0AA26D8A',
                'is_valid': 'true',
                'data': '0000aefd: 2e  .\n0000af0c: 66  f\n0000af0d: 90  .\n0000af31: eb  .\n000500cc: 2e  .\n000500cd: 5c  \\\n000500ce: 00  .',
                'comment': '',
                'library_id': '21'
            },
            {
                'id': '41',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': 'D72589C679C3C1ECE4530A101B0097725F3564B2',
                'is_valid': 'true',
                'data': '0000dd0e: 2e  .\n0000dd1d: 66  f\n0000dd1e: 90  .\n0000dd36: eb  .\n00174110: 2e  .\n00174111: 5c  \\\n00174112: 00  .',
                'comment': '',
                'library_id': '22'
            },
            {
                'id': '42',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': 'F8F78FECA4F7BE110E7C4CDE08AE0544830D546D',
                'is_valid': 'true',
                'data': '0000ddce: 2e  .\n0000dddd: 66  f\n0000ddde: 90  .\n0000ddf6: eb  .\n00146458: 2e  .\n00146459: 5c  \\\n0014645a: 00  .',
                'comment': '',
                'library_id': '23'
            },
            {
                'id': '43',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': 'DDEA91B6E8272835588347CF4DE8F11BEF67B77B',
                'is_valid': 'true',
                'data': '0000ddce: 2e  .\n0000dddd: 66  f\n0000ddde: 90  .\n0000ddf6: eb  .\n00146458: 2e  .\n00146459: 5c  \\\n0014645a: 00  .',
                'comment': '',
                'library_id': '24'
            },
            {
                'id': '44',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': '6853F71F266477B0F294AC8FF21FED157E3ABAF1',
                'is_valid': 'true',
                'data': '0000ddce: 2e  .\n0000dddd: 66  f\n0000ddde: 90  .\n0000ddf6: eb  .\n00146458: 2e  .\n00146459: 5c  \\\n0014645a: 00  .',
                'comment': '',
                'library_id': '25'
            },

            {
                'id': '45',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': 'BA577F81B6195B3999B50C6815134F6933625870',
                'is_valid': 'true',
                'data': '0000ee1d: 2e  .\n0000ee2c: 66  f\n0000ee2d: 90  .\n0000ee51: eb  .\n0008415c: 2e  .\n0008415d: 5c  \\\n0008415e: 00  .',
                'comment': '',
                'library_id': '26'
            },
            {
                'id': '46',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': '768D7F37A74BCCD04C13AA7BDCB1610017D4FB2D',
                'is_valid': 'true',
                'data': '0000ddce: 2e  .\n0000dddd: 66  f\n0000ddde: 90  .\n0000ddf6: eb  .\n00146458: 2e  .\n00146459: 5c  \\\n0014645a: 00 .',
                'comment': '',
                'library_id': '27'
            },
            {
                'id': '47',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': 'F9C4ADC8E076B466E5D6D173B7031C16C2CCFDCE',
                'is_valid': 'true',
                'data': '0000b77d: 2e  .\n0000b78c: 66  f\n0000b78d: 90  .\n0000b7b1: eb  .\n000570bc: 2e  .\n000570bd: 5c  \\\n000570be: 00  .',
                'comment': '',
                'library_id': '28'
            },
            {
                'id': '48',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': 'E9D3E6BAC1DC4B2ACD5A12612D95AD0547BF37C1',
                'is_valid': 'true',
                'data': '0000b69d: 2e  .\n0000b6ac: 66  f\n0000b6ad: 90  .\n0000b6d1: eb  .\n000570cc: 2e  .\n000570cd: 5c  \\\n000570ce: 00  .',
                'comment': '',
                'library_id': '29'
            },
            {
                'id': '49',
                'name': 'no-CD',
                'description': '?pat_no_CD_desc',
                'modified_checksum': 'AC802F9278523661C2452CC6532B6AE7398337F9',
                'is_valid': 'true',
                'data': '0000b69d: 2e  .\n0000b6ac: 66  f\n0000b6ad: 90  .\n0000b6d1: eb  .\n000570cc: 2e  .\n000570cd: 5c  \\\n000570ce: 00  /',
                'comment': '',
                'library_id': '30'
            },
            {
                'id': '50',
                'name': 'RANDOM sign/range fix',
                'description': '?random_sign_fix_desc',
                'modified_checksum': 'C6834B12DB0DC9BA4C9598B149507727B0BFA6CE',
                'is_valid': 'true',
                'data': '000cb6d2: 0f  .\n000cb6d3: 31  1\n000cb6d4: d1  .\n000cb6d5: e8  .\n000cb6d6: 31  1\n000cb6d7: d2  .\n000cb701: 0f  .\n000cb702: 31  1\n000cb703: d1  .\n000cb704: e8  .\n000cb705: 31  1\n000cb706: d2  .\n000cb74b: 0f  .\n000cb74c: 31  1\n000cb74d: d1  .\n000cb74e: e8  .\n000cb74f: 31  1\n000cb750: d2  .',
                'comment': 'Prepared by lde',
                'library_id': '4'
            },
            {
                'id': '51',
                'name': 'RANDOM sign/range fix',
                'description': '?random_sign_fix_desc',
                'modified_checksum': '63E9C7DCFEEDF2455C6836BF1EF5530B78C2EA74',
                'is_valid': 'true',
                'data': '000cb6d2: 0f  .\n000cb6d3: 31  1\n000cb6d4: d1  .\n000cb6d5: e8  .\n000cb6d6: 31  1\n000cb6d7: d2  .\n000cb701: 0f  .\n000cb702: 31  1\n000cb703: d1  .\n000cb704: e8  .\n000cb705: 31  1\n000cb706: d2  .\n000cb74b: 0f  .\n000cb74c: 31  1\n000cb74d: d1  .\n000cb74e: e8  .\n000cb74f: 31  1\n000cb750: d2  .',
                'comment': '',
                'library_id': '2'
            },
            {
                'id': '52',
                'name': 'RANDOM sign/range fix',
                'description': '?random_sign_fix_desc',
                'modified_checksum': 'A53E66BCFC318F9F90FCE1CDD2A27F0AFEB4BE68',
                'is_valid': 'true',
                'data': '000c6072: 0f  .\n000c6073: 31  1\n000c6074: d1  .\n000c6075: e8  .\n000c6076: 31  1\n000c6077: d2  .\n000c60a1: 0f  .\n000c60a2: 31  1\n000c60a3: d1  .\n000c60a4: e8  .\n000c60a5: 31  1\n000c60a6: d2  .\n000c60eb: 0f  .\n000c60ec: 31  1\n000c60ed: d1  .\n000c60ee: e8  .\n000c60ef: 31  1\n000c60e0: d2  .',
                'comment': '',
                'library_id': '5'
            },
            {
                'id': '53',
                'name': 'RANDOM sign/range fix',
                'description': '?random_sign_fix_desc',
                'modified_checksum': '6C697313FA19F623630A9225CE84552650C28F96',
                'is_valid': 'true',
                'data': '000cf062: 0f  .\n000cf063: 31  1\n000cf064: d1  .\n000cf065: e8  .\n000cf066: 31  1\n000cf067: d2  .\n000cf091: 0f  .\n000cf092: 31  1\n000cf093: d1  .\n000cf094: e8  .\n000cf095: 31  1\n000cf096: d2  .',
                'comment': '',
                'library_id': '6'
            },
            {
                'id': '54',
                'name': 'RANDOM sign/range fix',
                'description': '?random_sign_fix_desc',
                'modified_checksum': '918DF662137715DCBB174FAD1294837B83CE2DA0',
                'is_valid': 'true',
                'data': '000fb4f2: 0f  .\n000fb4f3: 1f  .\n000fb4f4: 40  @\n000fb4f5: 00  .\n000fb4f6: 0f  .\n000fb4f7: 31  1\n000fb4f8: d1  .\n000fb4f9: e8  .\n000fb4fa: 31  1\n000fb4fb: d2  .\n000fb531: 0f  .\n000fb532: 1f  .\n000fb533: 40  @\n000fb534: 00  .\n000fb535: 0f  .\n000fb536: 31  1\n000fb537: d1  .\n000fb538: e8  .\n000fb539: 31  1\n000fb53a: d2  .\n000fb5a2: 0f  .\n000fb5a3: 1f  .\n000fb5a4: 40  @\n000fb5a5: 00  .\n000fb5a6: 0f  .\n000fb5a7: 31  1\n000fb5a8: d1  .\n000fb5a9: e8  .\n000fb5aa: 31  1\n000fb5ab: d2  .',
                'comment': '',
                'library_id': '7'
            },
            {
                'id': '55',
                'name': 'RANDOM sign/range fix',
                'description': '?random_sign_fix_desc',
                'modified_checksum': '95D35708CF39B1E413C02329F09C967C75CDB498',
                'is_valid': 'true',
                'data': '000fbd42: 0f  .\n000fbd43: 1f  .\n000fbd44: 40  @\n000fbd45: 00  .\n000fbd46: 0f  .\n000fbd47: 31  1\n000fbd48: d1  .\n000fbd49: e8  .\n000fbd4a: 31  1\n000fbd4b: d2  .\n000fbd81: 0f  .\n000fbd82: 1f  .\n000fbd83: 40  @\n000fbd84: 00  .\n000fbd85: 0f  .\n000fbd86: 31  1\n000fbd87: d1  .\n000fbd88: e8  .\n000fbd89: 31  1\n000fbd8a: d2  .\n000fbdf2: 0f  .\n000fbdf3: 1f  .\n000fbdf4: 40  @\n000fbdf5: 00  .\n000fbdf6: 0f  .\n000fbdf7: 31  1\n000fbdf8: d1  .\n000fbdf9: e8  .\n000fbdfa: 31  1\n000fbdfb: d2  .',
                'comment': '',
                'library_id': '8'
            },
        ],
        'incompatibility': [
            {
                'id': '1',
                'patch_id1': '7',
                'patch_id2': '9',
                'comment': '?inc_findCD_overlap_com'
            }
        ],
        'localization': [
            {
                'id': '1',
                'key': 'lib_1st_ver',
                'lang': 'en',
                'content': 'the first version'
            },
            {
                'id': '2',
                'key': 'lib_1st_ver',
                'lang': 'pl',
                'content': 'pierwsza wersja'
            },
            {
                'id': '3',
                'key': 'lib_updated_2004',
                'lang': 'en',
                'content': 'the updated version from 2004'
            },
            {
                'id': '4',
                'key': 'lib_updated_2004',
                'lang': 'pl',
                'content': 'zaktualizowana wersja z 2004 roku'
            },
            {
                'id': '5',
                'key': 'lib_cdp_ver',
                'lang': 'en',
                'content': 'cdp.pl version'
            },
            {
                'id': '6',
                'key': 'lib_cdp_ver',
                'lang': 'pl',
                'content': 'wersja cdp.pl'
            },
            {
                'id': '7',
                'key': 'lib_KIDS_ver',
                'lang': 'en',
                'content': 'K.I.D.S. version'
            },
            {
                'id': '8',
                'key': 'lib_KIDS_ver',
                'lang': 'pl',
                'content': 'wersja K.I.D.S.'
            },
            {
                'id': '9',
                'key': 'lib_PR_mag_ver',
                'lang': 'en',
                'content': 'Przygody Reksia magazine version'
            },
            {
                'id': '10',
                'key': 'lib_PR_mag_ver',
                'lang': 'pl',
                'content': 'wersja z czasopisma Przygody Reksia'
            },
            {
                'id': '11',
                'key': 'pat_no_CD_desc',
                'lang': 'en',
                'content': 'Abolishes the need for using a physical or virtual CD while playing'
            },
            {
                'id': '12',
                'key': 'pat_no_CD_desc',
                'lang': 'pl',
                'content': 'Likwiduje konieczność użycia płyty lub montowania obrazu dysku'
            },
            {
                'id': '13',
                'key': 'pat_log_file_desc',
                'lang': 'en',
                'content': 'Activates debug output to Log.log file'
            },
            {
                'id': '14',
                'key': 'pat_log_file_desc',
                'lang': 'pl',
                'content': 'Uaktywnia logowanie do pliku Log.log'
            },
            {
                'id': '15',
                'key': 'pat_dbg_out_desc',
                'lang': 'en',
                'content': 'Activates debug output using OutputDebugStringA function'
            },
            {
                'id': '16',
                'key': 'pat_dbg_out_desc',
                'lang': 'pl',
                'content': 'Uaktywnia logowanie funkcją OutputDebugStringA'
            },
            {
                'id': '17',
                'key': 'pat_only_CXObject_log_com',
                'lang': 'en',
                'content': 'CXObject::log support only'
            },
            {
                'id': '18',
                'key': 'pat_only_CXObject_log_com',
                'lang': 'pl',
                'content': 'tylko logi z CXObject::log'
            },
            {
                'id': '19',
                'key': 'pat_fixed_ver1_com',
                'lang': 'en',
                'content': 'with a potential bug from version 1 fixed'
            },
            {
                'id': '20',
                'key': 'pat_fixed_ver1_com',
                'lang': 'pl',
                'content': 'bez potecjalnego problemu z wersji 1'
            },
            {
                'id': '21',
                'key': 'inc_findCD_overlap_com',
                'lang': 'en',
                'content': 'they affect the same function: findCD'
            },
            {
                'id': '22',
                'key': 'inc_findCD_overlap_com',
                'lang': 'pl',
                'content': 'dotyczą tej samej funkcji: findCD'
            },
            {
                'id': '23',
                'key': 'lib_rus_ver',
                'lang': 'en',
                'content': 'Russian localization'
            },
            {
                'id': '24',
                'key': 'lib_rus_ver',
                'lang': 'pl',
                'content': 'rosyjska wersja językowa'
            },
            {
                'id': '25',
                'key': 'lib_AM_published',
                'lang': 'en',
                'content': 'Rodzinna Gra Przygodowa series'
            },
            {
                'id': '26',
                'key': 'lib_AM_published',
                'lang': 'pl',
                'content': 'seria Rodzinna Gra Przygodowa'
            },
            {
                'id': '27',
                'key': 'lib_riu_rims_ver',
                'lang': 'pl',
                'content': 'seria 2 GRY!, w pakiecie z Miastem SeKretów'
            },
            {
                'id': '28',
                'key': 'lib_riu_rims_ver',
                'lang': 'en',
                'content': '2 GRY! series, bundled with City of Secrets'
            },
            {
                'id': '29',
                'key': 'lib_rom_ver',
                'lang': 'pl',
                'content': 'rumuńska wersja językowa'
            },
            {
                'id': '30',
                'key': 'lib_rom_ver',
                'lang': 'en',
                'content': 'Romanian localization'
            },
            {
                'id': '31',
                'key': 'random_sign_fix_desc',
                'lang': 'en',
                'content': 'Fixes RANDOM (game RNG) returning results of an unexpected sign and range'
            },
            {
                'id': '32',
                'key': 'random_sign_fix_desc',
                'lang': 'pl',
                'content': 'Poprawia RANDOM (używany przez grę generator losowy) tak, by zwracał wyniki w oczekiwanym zakresie i z oczekiwanym znakiem'
            },
        ]
    };

    /*
    * DATABASE LAYOUT
    */
    // mapping of grid names to grid IDs
    const tables = {
        'games': '1',
        'libraries': '2',
        'patches': '3',
        'incompatibility': '4',
        'localization': '5'
    };

    // checking for duplicates in tables values
    if ((new Set(Object.values(tables))).size !== Object.values(tables).length) {
        throw new Error('Duplicate values in "tables" object!');
    }


    /*
    * FUNCTIONS
    */
    function loadGrid(grid_name, localizer = null) {
        return new Promise((resolve, reject) => {
            if (debug) {
                console.log({ grid_name, rows: data[grid_name] });
            }
            let copiedRows = JSON.parse(JSON.stringify(data[grid_name]));
            if (localizer !== null) {
                copiedRows.forEach(row => {
                    for (let name in row) {
                        if (String(row[name])[0] === '?') {
                            row[name] = localizer(row[name]);
                        }
                    }
                });
            }
            if (debug) {
                console.log(`Parsed "${grid_name}" grid!`);
            }
            resolve(copiedRows);
        });
    }

    function transformLocalization(localization_grid) {
        let result = {};
        for (let row_no in localization_grid) {
            let row = localization_grid[row_no];
            if (Object.keys(result).indexOf(row['key']) === -1) {
                result[row['key']] = {};
            }
            result[row['key']][row['lang']] = row['content'];
        }
        return result;
    }

    return {
        loadSheets: async function (lang_id) {
            lang_id = String(lang_id).slice(0, 2);
            let localization = transformLocalization(await loadGrid('localization'));
            let localizer = (string => {
                string = string.slice(1);
                if (Object.keys(localization).indexOf(string) > -1) {
                    if (Object.keys(localization[string]).indexOf(lang_id) > -1) {
                        return localization[string][lang_id];
                    } else if (Object.keys(localization[string]).indexOf('en') > -1) {
                        console.log(`Falling back to the English localization of: ${string}`);
                        return localization[string]['en'];
                    } else {
                        let first_served = Object.keys(localization[string])[0];
                        console.log(`Falling back to the ${first_served} localization of: ${string}`);
                        return localization[string][first_served];
                    }
                } else {
                    if (debug) {
                        console.log(`Translation not found: ${string}`);
                    }
                    return string;
                }
            });
            let promises_array = new Array();

            for (let grid_name in tables) {
                if (grid_name !== 'localization') {
                    promises_array[Number(tables[grid_name])] = loadGrid(grid_name, localizer);
                }
            }
            if (debug) {
                console.log({ promises_array });
            }
            return (Promise.all(promises_array)
                .then(result => {
                    let database = Object.assign(tables);
                    for (let grid_name in tables) {
                        database[grid_name] = result[Number(tables[grid_name])];
                    }
                    return database;
                })
            );
        }
    };
})();
