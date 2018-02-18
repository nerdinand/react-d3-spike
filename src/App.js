import React, { Component } from 'react'
import './App.css'
import InteractiveHistogramChart from './InteractiveHistogramChart'

const data = [
  765.3499, 425.9986, 1551.999, 855.375, 861.3357, 562.1087, 1001.64, 1132.796, 937.9879, 935.537, 1149.556, 1009.15, 424.9693, 785.3018, 1425.001, 892.5853, 691.293, 1054.714, 646.7445, 1771.488, 1175.401, 1586.31, 983.3132, 1180.722, 1522.788, 1051.606, 1165.898, 215.7206, 1220.135, 1940.936, 1674.553, 182.4586, 642.2336, 541.7528, 1764.225, 685.1064, 465.954, 1622.43, 1229.938, 1083.853, 862.4985, 1246.161, 1669.877, 761.6279, 251.6022, 399.288, 796.2695, 526.126, 1425.833, 705.7845, 318.7634, 775.181, 678.3375, 744.6272, 1128.601, 790.2223, 523.8862, 1256.197, 127.8662, 751.2438, 1382.793, 1250.697, 1165.956, 954.4621, 671.659, 419.5759, 1827.966, 625.3947, 1310.96, 264.0974, 1399.098, 1139.731, 1328.937, 1296.863, 711.0367, 1238.031, 406.1832, 1358.844, 1067.349, 1711.04, 1020.365, 830.7951, 720.9423, 1513.907, 887.2648, 384.185, 620.8776, 1542.759, 475.4506, 1145.2, 776.2133, 890.5696, 197.2782, 1037.42, 739.0407, 967.5488, 1525.685, 128.9209, 1866.274, 1816.765, 811.6752, 916.8809, 983.9239, 1256.577, 1634.114, 469.8587, 1309.831, 590.1859, 756.1287, 954.4573, 1153.964, 812.558, 606.0717, 491.8302, 885.0839, 867.0413, 1181.908, 1057.843, 1378.653, 1757.656, 655.91, 786.7107, 786.8973, 1074.152, 2263.905, 928.3, 1516.534, 821.0676, 1378.861, 2149.371, 962.215, 2430.624, 295.605, 1038.219, 113.3955, 894.736, 848.1062, 694.0891, 929.7895, 1060.679, 1366.853, 2113.049, 1288.396, 1082.255, 1397.446, 1518.798, 273.6617, 1247.081, 584.5901, 1403.994, 1104.705, 861.2159, 265.8736, 1248.662, 1073.219, 1320.796, 1034.488, 1009.265, 864.7886, 883.8222, 526.0508, 1136.87, 965.1515, 777.6686, 1019.385, 842.718, 1936.426, 305.3322, 1348.605, 419.0352, 536.1294, 1146.921, 1102.736, 1198.211, 912.5265, 566.9787, 624.3258, 170.0969, 1498.68, 1600.621, 1501.385, 899.4849, 1201.828, 1144.183, 1000.815, 663.8428, 1440.426, 694.1764, 485.5649, 1983.144, 364.1852, 1046.526, 1153.531, 1004.766, 652.3154, 975.5064, 1445.261, 2405.216, 1163.795, 477.9463, 605.0205, 1099.08, 922.5944, 542.0197, 511.2799, 1778.38, 969.6292, 944.1418, 425.6667, 1753.105, 1513.04, 495.5707, 1254.006, 909.4424, 396.5921, 1306.544, 1823.491, 1208.062, 1060.057, 826.5643, 171.1153, 1538.571, 628.893, 1085.753, 1312.607, 430.4478, 740.9356, 2019.418, 567.8516, 594.4381, 1364.923, 308.7629, 1120.722, 675.4626, 167.2832, 1040.309, 467.1238, 1239.211, 1684.487, 63.78555, 1252.391, 1387.99, 1420.902, 1267.425, 661.7845, 275.2678, 1297.779, 1389.358, 913.5827, 1328.542, 1217.63, 682.3454, 1992.104, 1330.423, 970.418, 1072.426, 1030.32, 391.4518, 1465.654, 74.3587, 1175.075, 1042.805, 1183.821, 1440.081, 614.9626, 531.003, 1451.351, 1292.651, 1031.68, 1884.973, 782.3277, 1264.87, 1050.853, 233.7255, 946.2308, 1381.166, 883.1032, 1355.338, 994.4864, 1087.753, 483.4318, 2026.233, 361.4619, 849.6114, 1408.51, 762.8865, 993.5053, 912.0689, 889.2119, 705.4714, 1018.136, 614.7285, 10.55208, 942.3347, 1064.618, 1133.579, 303.52, 704.8032, 2061.505, 1036.628, 806.4241, 335.2267, 1172.454, 494.98, 994.5798, 567.4464, 978.294, 845.5109, 1734.842, 1232.964, 1214.773, 1702.108, 726.7663, 283.6223, 1185.917, 1435.459, 1518.195, 945.9002, 15.25024, 302.582, 515.2288, 878.1647, 1560.279, 879.707, 735.5447, 36.76707, 758.4622, 1693.078, 814.1769, 734.0012, 1798.656, 175.9351, 1268.938, 1173.836, 352.3259, 312.8096, 1048.414, 885.6117, 726.548, 781.6638, 951.5862, 735.166, 740.4417, 1705.47, 909.5787, 689.5253, 260.7402, 620.0345, 925.3201, 1185.117, 587.2946, 271.1001, 125.019, 1336.123, 1438.585, 828.2132, 2092.951, 1533.448, 844.6523, 764.2864, 898.2818, 1152.83, 1381.039, 2052.043, 404.7534, 1579.16, 822.7821, 1739.248, 504.7519, 612.243, 1667.16, 821.7562, 267.0077, 988.6094, 1302.1, 578.8164, 900.9223, 798.2023, 1569.325, 914.7466, 423.9967, 1155.203, 293.9734, 1160.486, 630.3201, 1150.2, 539.5163, 845.3014, 496.5093, 387.2271, 577.4165, 1125.044, 919.1131, 739.4863, 973.0121, 1930.139, 1082.874, 1401.348, 652.0974, 562.7738, 915.2359, 1245.004, 283.5596, 972.7776, 725.5682, 1160.65, 664.6417, 913.5863, 1044.882, 717.3623, 1350.025, 955.6777, 628.7476, 1632.431, 1891.531, 401.5022, 1340.86, 1760.837, 527.3826, 1418.479, 759.6781, 1820.044, 329.9265, 665.9051, 1038.923, 701.9041, 725.3461, 1449.629, 636.366, 671.2811, 671.6707, 1163.81, 806.5444, 1373.739, 573.3247, 696.8776, 1632.07, 1271.014, 1073.916, 366.5247, 1227.772, 499.9978, 795.1325, 1061.641, 686.2852, 780.6034, 133.2505, 602.6131, 555.2041, 1092.245, 1086.722, 1254.649, 888.2491, 1253.339, 632.3307, 708.5241, 1005.203, 1184.836, 921.9995, 830.0216, 1451.493, 823.5726, 470.0077, 947.7055, 686.3629, 1137.458, 415.9203, 287.2198, 1774.065, 1655.78, 615.5559, 1667.093, 1336.5, 1531.629, 1570.35, 1074.582, 1055.365, 809.5344, 1006.913, 1413.357, 812.7267, 1548.524, 1350.67, 879.0136, 1248.335, 552.6316, 1157.526, 489.6257, 722.3749, 1306.101, 1569.947, 1951.857, 1158.344, 1384.434, 75.02035, 1247.71, 595.7432, 1097.211, 1827.526, 942.4533, 1357.879, 921.4599, 1500.254, 1177.131, 969.1015, 762.4282, 1332.584, 1991.908, 928.9874, 664.8876, 664.7736, 1367.989, 873.4571, 2220.919, 392.6353, 2407.829, 999.4491, 1627.774, 842.2314, 1188.364, 1872.863, 1291.681, 447.3004, 220.6627, 898.4339, 1117.802, 994.3491, 1020.27, 1886.208, 324.4361, 274.9355, 606.3693, 902.4058, 519.1029, 1495.35, 1722.203, 1260.123, 576.8003, 312.6101, 1275.466, 864.5241, 1099.652, 1261.187, 232.0293, 525.8621, 1331.246, 1014.143, 148.2371, 859.3372, 1219.531, 694.5802, 1133.481, 1166.28, 950.5457, 1054.789, 1578.867, 1328.19, 114.0094, 1005.939, 1612.28, 817.0259, 834.3498, 629.7764, 732.4701, 945.1943, 598.0192, 952.5494, 1303.06, 937.8689, 1292.725, 483.0838, 1683.985, 1114.225, 1332.056, 1686.127, 1178.058, 1199.781, 1595.695, 1187.23, 1183.197, 1590.274, 951.5539, 535.15, 206.4302, 902.9982, 2005.872, 1704.021, 428.8917, 2085.378, 372.5556, 875.8347, 147.3031, 631.5655, 1055.88, 1266.038, 1330.38, 561.2512, 1626.394, 515.8059, 780.9564, 268.2983, 700.4901, 471.4904, 1042.739, 1715.982, 1221.843, 47.5392, 1533.17, 1866.068, 1794.839, 657.4921, 1386.757, 962.6179, 1104.723, 1058.665, 813.6905, 1378.915, 1270.69, 1103.375, 1541.139, 945.5878, 442.2713, 1759.71, 971.7014, 1776.14, 1143.194, 707.7996, 1192.098, 951.0402, 1143.072, 1843.248, 1500.524, 1284.905, 449.2853, 1093.927, 1222.476, 589.6352, 620.3873, 1475.253, 108.607, 652.8915, 810.9291, 2002.525, 1027.09, 606.9088, 1089.269, 182.6561, 1601.861, 1538.661, 1034.503, 1276.805, 1617.733, 753.5276, 1076.391, 1236.109, 1066.981, 585.5551, 653.7913, 1211.435, 1418.276, 867.1352, 1498.228, 835.435, 416.9406, 489.261, 826.0074, 1124.921, 1051.859, 346.7342, 1561.383, 597.0205, 537.288, 226.1486, 617.8917, 1069.208, 656.4428, 92.80369, 142.2202, 475.4089, 331.9036, 748.5419, 994.7112, 2284.231, 1034.956, 225.617, 2025.206, 1661.106, 820.3394, 1389.495, 642.4831, 598.2862, 774.5197, 1259.638, 906.5022, 758.8048, 1363.943, 1219.42, 400.6717, 1152.654, 898.8553, 1401.099, 875.9111, 516.7689, 699.243, 1293.305, 960.1105, 1795.417, 695.5084, 1433.171, 987.097, 765.6214, 2223.972, 1399.6, 1263.73, 918.2909, 594.383, 738.7599, 712.8415, 945.0536, 982.7204, 1215.027, 467.6256, 1294.257, 1272.842, 613.7995, 697.4775, 244.3676, 1821.52, 1359.938, 1277.873, 329.9261, 1356.235, 1158.65, 492.5658, 1626.824, 475.6664, 508.2107, 711.367, 1215.099, 656.9248, 1374.818, 1522.243, 908.2896, 1588.372, 597.0943, 522.1289, 1314.419, 1043.419, 650.5733, 978.0564, 525.712, 1008.478, 956.7004, 1081.175, 1374.839, 1297.381, 79.84317, 2218.723, 1131.106, 903.8559, 71.08474, 1086.293, 1164.596, 74.14588, 394.5608, 1324.205, 1313.895, 1093.512, 122.5784, 737.6899, 1709.523, 1731.041, 777.5277, 1171.28, 1584.744, 1124.445, 1324.742, 1459.326, 1495.683, 525.5947, 1016.462, 489.2728, 493.8694, 705.0691, 1543.537, 1633.662, 1078.451, 378.4731, 970.6589, 1657.882, 971.1999, 1158.297, 960.5366, 72.89601, 1860.507, 1243.372, 589.3931, 959.3591, 913.5966, 1049.869, 1287.89, 890.3671, 639.1384, 1212.971, 1782.104, 340.9087, 974.5745, 1293.721, 1228.982, 640.8554, 685.8912, 647.9186, 893.4131, 911.2739, 1413.736, 388.6736, 852.436, 274.8947, 775.8451, 536.5503, 1006.151, 923.9497, 1543.607, 708.6694, 1664.523, 2043.566, 737.2426, 204.5486, 699.4172, 1155.987, 1624.486, 893.4251, 1416.259, 1116.102, 31.5034, 1099.336, 1485.515, 562.0429, 740.277, 1404.214, 1523.189, 994.7347, 1725.269, 1509.445, 706.5682, 969.4159, 980.7558, 381.1495, 82.74183, 915.815, 656.8467, 1190.211, 728.0679, 1617.963, 1203.904, 2030.749, 1166.572, 740.2653, 426.9273, 924.6636, 1459.973, 878.2346, 1391.461, 693.6527, 647.0522, 646.5289, 835.325, 846.8005, 459.2998, 302.2255, 288.4095, 1885.043, 146.5058, 945.5211, 1368.664, 1244.467, 211.0692, 1154.567, 1350.901, 1024.4, 706.8501, 1658.185, 631.2549, 344.9957, 861.0849, 1426.798, 634.2293, 1790.407, 1768.91, 1800.988, 1167.908, 877.2153, 1672.981, 899.8109, 830.0068, 1216.251, 1654.1, 1684.382, 2206.297, 1216.824, 320.2343, 328.2742, 1880.969, 886.6716, 1306.793, 1925.029, 1202.241, 858.2673, 2327.168, 1662.701, 254.8234, 891.2156, 1323.255, 1681.606, 845.2985, 1126.703, 333.0725, 895.4985, 1004.626, 720.1776, 1966.034, 2171.641, 1326.781, 794.2447, 1211.895, 1034.181, 2100.271, 284.3396, 790.7954, 176.3465, 1061.136, 926.0514, 76.07302, 960.7846, 974.133, 2071.732, 1269.337, 1629.304, 1430.016, 122.3008, 763.5129, 1232.845, 1457.087, 727.1838, 597.03, 1153.805, 614.2918, 1191.3, 688.369, 1336.113, 1518.569, 1018.373, 500.6728, 738.8838, 1030.754, 792.9774, 788.6022, 933.1237, 1263.671, 784.1142, 881.3149, 1235.117, 1497.493, 1272.594, 1088.928, 1029.65, 1416.292, 815.9517, 302.2287, 1352.5, 459.8717, 399.0664,
  3262.962, 4576.932, 18604.69, 19292.16, 13203.94, 22339.81, 7670.272, 2332.134, 25938.36, 15389.24, 19123.64, 24009.71, 1417.011, 9114.631, 1477.615, 11684.82, 15506.07, 11142.78, 15688.01, 7898.417, 18544.29, 2072.758, 3073.364, -4934.543, -1887.496, -300.1099, 7886.233, 3441.267, 15658.38, 10073.4, -714.0568, 13964.18, 38318.73, 5364.705, 3202.845, -445.649, 3172.2, 16435.05, 6020.98, 2193.19, 9911.965, 17216.98, 17649.75, 1696.424, -1801.802, 13133.2, 18191.44, 11108.02, 20466.24, 15056.88, 13307.11, 9401.961, -107.4144, 38857.6, 2604.405, 12115.96, 12764.54, 15037.17, 234.6757, -17549.42, 25350.37, 1013.781, 8890.417, 15021.8, 2036.76, 8713.386, 5294.543, 12976.26, 7847.516, 14632.42, 16414.41, 21525.43, 20675.71, -6796.255, 83.11711, 9756.762, 9208.976, 14130.89, 5759.804, 16977.25, 18435.03, 16896.94, 9972.895, 16511.04, 17613.55, -4261.418, 2603.64, 18145.45, 9107.253, 8958.393, 22462.95, -14456.46, 18270.89, 22645.08, 28111.19, 25943.38, 1784.551, 4317.657, 18177.48, 1780.22, 6340.816, 1187.711, 10732.08, 611.9649, 4559.461, 429.3824, 14909.31, 8834.649, 12610.5, 7843.624, 21539.73, -13103.3, -903.2652, 28231.71, 8408.494, -7475.079, 13852.5, 7803.342, 7813.806, 12896.06, 2293.779, 6275.873, 8281.048, -9267.822, 12006.36, 7953.779, 1028.149, 11542.09, -5575.911, 3057.035, 17349.87, 22463.47, -1829.026, 15243.76, 16331.22, 13418.61, 4835.503, 10740.29, -3064.399, 15462.16, 23449.41, 9256.378, -4982.037, 3981.214, 20813.14, 17922.33, 2057.751, -6201.235, 11106.54, 1027.13, 15058.91, 23006.27, 22746.43, -5038.864, 7461.806, 19108.84, -2318.982, 18727.19, 23721.28, 38744.88, 26765.94, 13109.05, 11960.92, 16960.88, 14707.54, 21412, -1652.569, 16399.54, -605.5704, 28302.96, 13163.04, 4176.424, 12824.44, -10262.54, 34837.34, 18211.75, 442.2178, 28950.98, 25093.74, 14241.32, 25886.41, 13994.59, 14609.2, 8826.045, 7260.124, 1417.938, 13744.06, 182.4029, 23996.59, 13862.74, -2921.201, 14675.13, -81.30103, 14176.86, 10369.58, 1744.548, 15829.59, 13390.23, -5627.314, 4237.946, -10020.52, 3893.973, 3781.651, 12414.13, -1733.275, 4529.171, 9072.227, 33910.37, 26025.58, 14185.18, 21720.03, 25809.6, 7712.375, 17577.58, 18264.32, 8461.123, -8254.596, 14880.87, -456.781, 8559.549, 13160.08, -8049.962, -3107.437, 10680.06, 9076.286, 6564.246, 18899.25, -9035.111, 12846.86, 14956.07, 9945.657, 22147.61, 13407.06, -2485.599, 21496.59, 12847.77, 9447.775, -7642.826, 2672.983, 16294.78, 10370.49, 14988.83, 5296.695, 25071.59, 6113.677, 5240.719, 15705.53, 15735.44, 17001.53, 18624.96, 8631.916, 17578.08, 19728.68, 3040.9, 5563.324, -2226.896, 29071.33, -5517.653, 4396.491, 2895.1, 6288.351, 989.6927, 6769.759, 15681.18, 9.689648, 9991.591, -7110.637, 17730.18, 15031.67, -7655.778, 20773.62, 18504.91, 16228.69, 25286.18, 11198.71, 12061.93, 12487.3, 264.5742, 22240.3, 21367.53, 10238.99, 5451.863, -1378.961, 13525.05, 22963.69, 21997.43, 18437.55, -552.3992, 627.2014, 3530.321, 32249.87, -2851.673, 3178.612, 15960.58, 23350.68, 13073.15, 12880.02, 14442.7, 7395.594, 1341.598, 21954.81, -4940.112, -8117.626, 17203.27, 14020.61, 26399.33, 16157.36, 21701.39, 11746.38, 8221.755, 15504.55, -10814.42, 3894.079, 7820.921, 2136.661, 2655.548, 12868.42, 11732.73, 11081.81, 7896.293, 20366.88, -208.6154, 17825.26, 4338.031, 11070.74, 9072.389, 18089.07, -441.355, 330.3628, 4717.151, -5060.62, -10969.26, -8059.465, 12190.2, 12378.22, 27133.43, 2054.924, 35662.64, 1221.67, 10264.11, 7823.353, 2089.25, 18488.68, 8901.921, 12477.88, 10783.73, 11252.44, -1131.635, 21104.56, 18900.95, -3431.708, 18533.04, 16808.92, 16251.97, 864.3237, 15031.61, -5526.082, -1149.057, 18257.92, 22112.33, 12703.61, 22441.2, 15458, 13424.02, -583.1713, 19843.32, -2933.838, 13467.14, 2789.867, 9625.693, -6605.977, 811.1507, -7272.298, -11776.19, 10535.98, 14049.25, 5040.018, 9398.268, 18236.33, -7639.897, -17391.53, 7614.462, -4472.365, 18827.26, 22992.2, 1553.5, 19625.76, -6236.175, 12981.92, 16856.76, 17960.42, 15969.97, 30413.41, 3629.323, 10173.98, -6876.37, 21409.41, -227.6945, 13636.06, 13577.49, 24646.29, 7692.664, 10768.05, 24685.29, 23398.86, 6337.19, 8259.268, 16130.41, 5630.278, 10884.07, 23560.78, 10598.59, 4999.665, 18787, 12183.79, 13625.91, 19621.89, 19443.23, 17832.38, 14477.1, 7115.17, 19189.81, 514.5346, 16003.98, 22956.61, 13868.98, 15495.46, -8998.073, 11540.79, 7455.839, -6475.234, 9104.234, 9336.209, 3196.113, -1903.766, -18919.38, 7618.878, 16872.61, 13667.91, 33848.69, 7305.499, 19106.91, 6986.705, -16915.03, 8829.582, 20815.54, -1387.438, -1989.309, 23075.93, 17349.44, -2993.993, 9958.313, 12355.5, 10814.5, 13316.81, 17957.19, 19365.12, 14126.42, 5233.064, 18634.63, 15593.17, -19520.17, -2111.64, 11088.72, -1341.306, -377.856, -9379.958, -3545.191, 26987.51, -5995.086, 21712.93, 11014.01, -10477.98, -791.593, -4458.448, 5865.252, 20080.1, 2241.93, 7564.159, -1790.819, 4570.036, 10470.87, 8301.811, 9455.494, 8028.174, 19137.68, 17526.54, 17890.08, 9271.628, 20291.83, 11968.93, 10927.62, -8464.432, 10355.54, 5656.517, 23616.64, -107.5819, 18381.6, 11033.37, 11137.92, 14679.37, -948.3377, 20998.98, 17504.89, -9271.159, 9533.697, 2341.552, 17767.41, 5856.024, 8942.265, 21595.11, 12373.45, -8998.662, 4788.198, -956.6503, 21476.03, 15597.03, 5033.208, 9081.552, 10699.13, 14195.6, 13565.93, 10580.59, -4116.687, -5438.033, 29786.76, 23545.45, 746.2008, 11433.23, 10134.24, 10489.93, 104.049, 18484.79, -2869.767, 18241.44, 1296.886, -13159.68, 18742.18, -2859.093, -1355.428, 16476.04, 5794.134, -4524.973, 20884.6, 13125.56, 33416.84, 9889.794, 21258.45, 26757.71, 28663.33, 3008.145, 24835.07, 11456.21, 906.1477, 28206.35, 9582.633, 12466.66, 8142.333, -7762.245, 8307.341, 12182.7, 17903.14, 3662.967, 20101.42, 12220.78, 19736.27, 6369.877, 24067.02, 19145.38, 3478.943, 32939.87, 7729.389, 24507.27, 7191.348, 10876.78, 4405.835, 31167.03, 5489.383, 17988.05, 28649.74, 17235.75, 4728.711, 14221.46, 14103.26, 4632.954, 12231.9, 17677.72, 19140.83, 17386.84, 4451.148, -10026.94, 5144.823, 17536.32, 11228.52, 5268.155, 7547.849, 11377.16, 22963.26, 10776.7, 11281.89, 12407.19, 5851.352, 20770.76, 6960.927, 2091.699, 16030.58, 4749.515, 9078.454, 16745.95, 6512.823, 25998.47, 11552.63, 8134.497, 12553.04, 12004.06, 27769.66, 14989.79, 13383.15, -2290.741, 22790.5, -1073.177, -3277.629, 5224.459, 4176.875, -4778.688, 11855.75, 9773.666, 23550.34, 5648.426, 13750.44, 7657.483, 12262, 4748.528, 2324.176, 13490.07, 21157.93, 12812.86, 15301.15, 12028.75, 17756.56, 11616.78, 21936.05, -16879.31, 38290.55, -5544.456, 4791.876, 16290.13, 5857.414, -952.2751, 22439.93, -1535.423, 28524.87, 31245.76, 42.25307, 12135.82, 15666.64, -4721.647, 14213.06, 6355.968, 21807.02, 5942.088, 2142.008, 120.9433, -5196.735, -13474.4, 9467.738, -845.538, -1327.695, 35008.46, 17026.78, 7313.643, 8599.653, 22890.8, 21107.77, 15677.9, 949.8836, 12585.27, 3173.46, -705.6758, 18735.71, 3611.365, 2693.74, 2658.583, -3656.928, 13174.49, 274.9111, 19598.22, 2200.358, 10388.51, -3954.761, -3070.164, 12247.48, -405.8159, 24540.95, 21311.1, 18281.66, -2636.207, 17605.08, -4602.408, 17622.86, 14317.46, -6592.876, -4152.517, 12547.92, -9973.265, 20513.17, 20488.54, 23924.12, 15278.86, 20827.31, 13278.26, 13337.72, 7752.142, -1126.23, 8688.651, -2647.918, -119.1343, 16575.28, 5932.85, 15508.1, 15043.62, 29461.52, 11071.88, 22881.36, 980.9702, 21980.66, 3025.904, 16422.38, 15390.3, 21332.1, 15568.96, 10409.53, 8646.86, 6474.55, 5704.322, 7391.048, 20575.96, 17569.44, 10043.58, 2658.294, -13840.57, 6003.032, 19429.96, 10678.03, 9379.673, 19163, 27245.89, 11484.05, 12869.99, 24740.85, -16314.22, 22125.81, 12227.69, 11094.95, -2629.741, 12201.99, -3295.859, 22607.43, 15961.78, 27662.7, 26819.58, 10085.25, 23613.88, -3358.389, 6045.832, -419.5704, 20424.53, 9574.735, -7991.71, -1338.051, 22867.89, 13285.29, 10111.64, 34014.47, 13314.4, 113.6965, 12942.4, -10026.56, 7212.285, 14816.56, 30618.77, 5564.472, 9428.474, 6729.466, 18193.13, 3595.81, 4203.537, -7820.643, 1998.83, 5786.214, 10751.86, 11950.74, 10929.06, 11951.39, -1017.58, 15191.08, 25625, -3887.256, 10798.6, 17641.42, 1610.148, 23858.47, 7818.11, 7868.45, 3829.523, -8102.217, 4884.044, -8211.263, 16635.52, 2794.374, 20407.4, 6567.996, 40443.82, 25154.48, 17939.21, 9887.297, 43057.01, 28193.77, -2497.007, 30368.35, 1701.887, -1995.776, 17398.47, 6825.313, 3548.804, -1632.576, 16488.98, 2507.326, 11057.04, 16642.09, 728.6588, 3974.317, 22379.03, -310.8576, -1998.13, 2324.608, 6683.11, 2450.116, 12049.54, 9212.304, 33884.38, 25135.06, 1504.935, -7815.057, 7033.259, 7155.025, 6369.223, -8562.231, -5489.153, -1214.106, 6377.329, -959.3268, 8101.035, 2778.07, 21776.99, 11540.18, 18690.78, 17531.89, 3254.534, 31343.78, 18638.19, 13676.11, 33482.19, 17410.6, 22120.5, 15852.91, 1821.044, 1930.888, 16281.18, -7386.304, 5925.787, 9324.928, -5165.627, 9675.402, 12654.49, 12476.68, 8841.299, 32636.3, 14187.01, 18305.11, 23055.85, 5754.641, 19770.38, 18817.02, 36912.9, -342.6273, 16935.17, -2590.27, 14910.7, 14873.72, 13779.95, 27319.75, 15828.07, 10659.01, 13081.57, -2121.972, 16506.35, 11422.1, 24750.78, 6111.829, 11581.95, 8460.29, 16493.36, 2748.872, 10233.84, 9573.068, 22199.75, 7082.726, 17281.5, 7391.153, 9037.996, 16403.75, 13904.14, 6829.008, -1567.404, 5460.699, 5334.413, -8599.855, 40418.98, -9663.973, -11222.5, 26272.43, 17762.08, 15694.84, 13581.63, 19406.62, 14504.32, 14870.93, 118.9456, 18594.11, -5605.566, 19331.87, 21325.65, 14521.85, -6995.739, 12966.42, 7099.497, 16002.23, 29664.95, 8550.852, 10793.24, 173.9528, -1007.556, 20596.03, 1094.11, 23674.93, 6064.85, 14789.7, -5357.343, 8830.265, 21057.67, 6804.108, 15957.62, -1089.293, 6604.704, 14767.9, 14259.95, 12436.7, -456.6588, 24985.53, 3570.304, 14585.02, 5212.5, -5947.788, -3328.514, 10611.67, 21817.47, 17253.98, 9072.454, 9119.052, 27116.69, -4148.885, 205.6402, 4126.198, 10589.65, 10193.37, -1853.553, 4621.872, -11813.35, 2387.834, -548.4141, 19450.85, 22287.6, 36087.81, 18063.73, 1638.495, -11918.06, 14468.02, 21349.07, 11562.81, 9999.989, -12808.39, 28186.15, 13566.12, -11253.32, 9580.75, 32185.65, 13605.28, -4344.781, 28441.39
];

class App extends Component {
   render() {
    return (
      <InteractiveHistogramChart data={data} size={[500,300]} />
    )
   }
}

export default App
