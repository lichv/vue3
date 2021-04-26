import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
    {
        path: '/',
        component: () => import('/@/views/Resources.vue'),
        children: [
        {
            path: '',
            component: () => import('/@/views/resources/Dashboard.vue')
        },
        ]
    },
    {
        path: '/resources',
        component: () => import('/@/views/Resources.vue'),
        children: [
        {
            path: 'user',
            component: () => import('/@/views/EmptyRouter.vue'),
            children: [
            {
                path: 'list',
                component: () => import('/@/views/resources/user/Users.vue')
            },
            {
                path: 'relationship',
                component: () => import('/@/views/resources/user/Relationship.vue')
            },
            {
                path: 'doctor',
                component: () => import('/@/views/resources/user/Doctors.vue')
            },
            {
                path: 'hospital',
                component: () => import('/@/views/resources/user/Hospitals.vue')
            },
            {
                path: 'department_tag',
                component: () => import('/@/views/resources/user/DepartmentTags.vue')
            },
            {
                path: 'orgnization',
                component: () => import('/@/views/resources/user/Orgnizations.vue')
            },
            ],
        },
        {
            path: 'product',
            component: () => import('/@/views/EmptyRouter.vue'),
            children: [
            {
                path: 'list',
                component: () => import('/@/views/resources/product/Product.vue')
            },
            {
                path: 'add',
                component: () => import('/@/views/resources/product/ProductAdd.vue')
            },
            {
                path: 'price',
                component: () => import('/@/views/resources/product/ProductPrice.vue')
            },
            {
                path: 'laboratory',
                component: () => import('/@/views/resources/product/ProductLaboratory.vue')
            },
            {
                path: 'bioanalysis',
                component: () => import('/@/views/resources/product/ProductBioanalysis.vue')
            },
            {
                path: 'report_type',
                component: () => import('/@/views/resources/product/ProductReportType.vue')
            },
            {
                path: 'report_template',
                component: () => import('/@/views/resources/product/ProductReportTemplate.vue')
            },
            {
                path: 'status',
                component: () => import('/@/views/resources/product/ProductStatus.vue')
            },
            {
                path: 'process',
                component: () => import('/@/views/resources/product/ProductAction.vue')
            },
            {
                path: 'progress',
                component: () => import('/@/views/resources/product/ProductProcess.vue')
            },
            ],
        },
        {
            path: 'sample',
            component: () => import('/@/views/EmptyRouter.vue'),
            children: [
            {
                path: 'store',
                component: () => import('/@/views/resources/sample/SampleStore.vue')
            },
            {
                path: 'types',
                component: () => import('/@/views/resources/sample/SampleType.vue')
            },
            ],
        },
        {
            path: 'project',
            component: () => import('/@/views/EmptyRouter.vue'),
            children: [
            {
                path: 'list',
                component: () => import('/@/views/resources/project/Projects.vue')
            },
            {
                path: 'add',
                component: () => import('/@/views/resources/project/ProjectDetail.vue')
            },
            
            ],
        },

        ]
    },
    {
        path: '/sale',
        component: () => import('/@/views/Sales.vue'),
        children: [
        {
            path: '',
            component: () => import('/@/views/sales/Dashboard.vue')
        },
        {
            path: 'my',
            component: () => import('/@/views/EmptyRouter.vue'),
            children: [
            {
                path: 'users',
                component: () => import('/@/views/sales/my/Users.vue')
            },
            {
                path: 'orders',
                component: () => import('/@/views/sales/my/Orders.vue')
            },
            {
                path: 'doctors',
                component: () => import('/@/views/sales/my/Doctors.vue')
            },
            {
                path: 'hospitals',
                component: () => import('/@/views/sales/my/Hospitals.vue')
            },
            {
                path: 'samples',
                component: () => import('/@/views/sales/my/Samples.vue')
            },            
            ],
        },
        {
            path: 'order',
            component: () => import('/@/views/EmptyRouter.vue'),
            children: [
            {
                path: 'list',
                component: () => import('/@/views/sales/order/OrderList.vue')
            },
            {
                path: 'useradd',
                component: () => import('/@/views/sales/order/UserAdd.vue')
            },
            {
                path: 'sampleadd',
                component: () => import('/@/views/sales/order/SampleAdd.vue')
            },
            {
                path: 'orderadd',
                component: () => import('/@/views/sales/order/OrderAdd.vue')
            },
            {
                path: 'special',
                component: () => import('/@/views/sales/order/Special.vue')
            },
            {
                path: 'append',
                component: () => import('/@/views/sales/order/Append.vue')
            },
            
            ],
        },
        {
            path: 'deliver',
            component: () => import('/@/views/EmptyRouter.vue'),
            children: [
            {
                path: 'review',
                component: () => import('/@/views/sales/deliver/Review.vue')
            },
            {
                path: 'reports',
                component: () => import('/@/views/sales/deliver/Reports.vue')
            },            
            ],
        },

        ]
    },
    {
        path: '/research',
        component: () => import('/@/views/Research.vue'),
        children: [
        {
            path: '',
            component: () => import('/@/views/research/Dashboard.vue')
        },
        {
            path: 'my',
            component: () => import('/@/views/EmptyRouter.vue'),
            children: [
            {
                path: 'projects',
                component: () => import('/@/views/research/my/Projects.vue')
            },
            {
                path: 'checklist',
                component: () => import('/@/views/research/my/Checklist.vue')
            },
            ],
        },
        {
            path: 'order',
            component: () => import('/@/views/EmptyRouter.vue'),
            children: [
            {
                path: 'list',
                component: () => import('/@/views/research/order/OrderList.vue')
            },
            {
                path: 'useradd',
                component: () => import('/@/views/research/order/UserAdd.vue')
            },
            {
                path: 'sampleadd',
                component: () => import('/@/views/research/order/SampleAdd.vue')
            },
            {
                path: 'orderadd',
                component: () => import('/@/views/research/order/OrderAdd.vue')
            },
            {
                path: 'special',
                component: () => import('/@/views/research/order/Special.vue')
            },
            {
                path: 'append',
                component: () => import('/@/views/research/order/Append.vue')
            },
            
            ],
        },
        {
            path: 'deliver',
            component: () => import('/@/views/EmptyRouter.vue'),
            children: [
            {
                path: 'review',
                component: () => import('/@/views/research/deliver/Review.vue')
            },
            {
                path: 'reports',
                component: () => import('/@/views/research/deliver/Reports.vue')
            },            
            ],
        },

        ]
    },
    {
        path: '/production',
        component: () => import('/@/views/Production.vue'),
        children: [
        {
            path: '',
            component: () => import('/@/views/production/Dashboard.vue'),
        },
        {
            path: 'record',
            component: () => import('/@/views/production/Record.vue'),
        },

        {
            path: 'lab',
            component: () => import('/@/views/EmptyRouter.vue'),
            children: [
            {
                path: 'receive',
                component: () => import('/@/views/production/lab/Receive.vue')
            },
            {
                path: 'labcheck',
                component: () => import('/@/views/production/lab/Uncheck.vue')
            }, 
            {
                path: 'documents',
                component: () => import('/@/views/production/lab/LabData.vue')
            }, 
            {
                path: 'mydocuments',
                component: () => import('/@/views/production/lab/MyLabData.vue')
            }, 
            {
                path: 'unnormal',
                component: () => import('/@/views/production/lab/Unnormal.vue')
            },            
            ],
        },
        {
            path: 'bio',
            component: () => import('/@/views/EmptyRouter.vue'),
            children: [
            {
                path: 'documents',
                component: () => import('/@/views/production/bio/BioData.vue')
            }, 
            {
                path: 'mydocuments',
                component: () => import('/@/views/production/bio/MyBioData.vue')
            }, 
            {
                path: 'qc',
                component: () => import('/@/views/production/bio/QC.vue')
            }, 
            {
                path: 'unnormal',
                component: () => import('/@/views/production/bio/Unnormal.vue')
            },            
            ],
        },
        {
            path: 'med',
            component: () => import('/@/views/EmptyRouter.vue'),
            children: [
            {
                path: 'medcheck',
                component: () => import('/@/views/production/med/Uncheck.vue')
            },
            {
                path: 'report',
                component: () => import('/@/views/production/med/MedData.vue')
            }, 
            {
                path: 'myreport',
                component: () => import('/@/views/production/med/MyMedData.vue')
            }, 
            {
                path: 'mycustomer',
                component: () => import('/@/views/production/med/MyUser.vue')
            }, 
            {
                path: 'unnormal',
                component: () => import('/@/views/production/med/Unnormal.vue')
            },            
            ],
        },
        {
            path: 'unnormal',
            component: () => import('/@/views/production/Unnormal.vue'),
        },
        {
            path: 'diary',
            component: () => import('/@/views/production/Diary.vue'),
        },
        ]
    },
    {
        path: '/finance',
        component: () => import('/@/views/Finances.vue'),
        children: [
        {
            path: '',
            component: () => import('/@/views/finances/Dashboard.vue')
        },
        {
            path: 'config',
            component: () => import('/@/views/EmptyRouter.vue'),
            children: [
            {
                path: 'payment',
                component: () => import('/@/views/finances/system/Payment.vue')
            },          
            ],
        },
        {
            path: 'manage',
            component: () => import('/@/views/EmptyRouter.vue'),
            children: [
            {
                path: 'ordercheck',
                component: () => import('/@/views/finances/manage/OrderCheck.vue')
            },
            {
                path: 'orderdetailcheck',
                component: () => import('/@/views/finances/manage/OrderDetailCheck.vue')
            }, 
            {
                path: 'backmoney',
                component: () => import('/@/views/finances/manage/BackMoney.vue')
            },          
            ],
        },
        ]
    },
    {
        path: '/human',
        component: () => import('/@/views/Humans.vue'),
        children: [
        {
            path: '',
            component: () => import('/@/views/humans/Humans.vue')
        },
        {
            path: 'team',
            component: () => import('/@/views/humans/Team.vue')
        },
        {
            path: 'saler_team',
            component: () => import('/@/views/humans/SalerTeam.vue')
        },
        {
            path: 'members',
            component: () => import('/@/views/humans/Member.vue')
        },
        {
            path: 'authority',
            component: () => import('/@/views/humans/Authority.vue')
        },
        {
            path: 'performance',
            component: () => import('/@/views/humans/Performance.vue')
        },
        ]
    },
    {
        path: '/analysis',
        component: () => import('/@/views/Analysis.vue'),
        children: [
        {
            path: '',
            component: () => import('/@/views/analysis/Statistic.vue')
        },
        {
            path: 'sale',
            component: () => import('/@/views/EmptyRouter.vue'),
            children: [
            {
                path: 'order',
                component: () => import('/@/views/analysis/sale/Order.vue')
            }, 
            {
                path: 'distribution',
                component: () => import('/@/views/analysis/sale/Distribution.vue')
            },
            {
                path: 'productivity',
                component: () => import('/@/views/analysis/sale/Productivity.vue')
            },          
            ],
        },
        {
            path: 'production',
            component: () => import('/@/views/EmptyRouter.vue'),
            children: [
            {
                path: 'whole',
                component: () => import('/@/views/analysis/production/Production.vue')
            }, 
            {
                path: 'labrotory',
                component: () => import('/@/views/analysis/production/Labrotory.vue')
            },
            {
                path: 'bioanalysis',
                component: () => import('/@/views/analysis/production/BioAnalysis.vue')
            }, 
            {
                path: 'medreport',
                component: () => import('/@/views/analysis/production/Medreport.vue')
            },          
            ],
        },
        ]
    },
    {
        path: '/system',
        component: () => import('/@/views/System.vue'),
        children: [
        {
            path: '',
            component: () => import('/@/views/system/System.vue')
        }, 
        {
            path: 'diary',
            component: () => import('/@/views/EmptyRouter.vue'),
            children: [
            {
                path: 'system',
                component: () => import('/@/views/system/diary/SystemDiary.vue')
            }, 
            {
                path: 'login',
                component: () => import('/@/views/system/diary/LoginDiary.vue')
            },          
            ],
        },
        {
            path: 'config',
            component: () => import('/@/views/EmptyRouter.vue'),
            children: [
            {
                path: 'system',
                component: () => import('/@/views/system/config/SystemConfig.vue')
            }, 
            {
                path: 'business',
                component: () => import('/@/views/system/config/BusinessConfig.vue')
            },
            {
                path: 'area',
                component: () => import('/@/views/system/config/AreaConfig.vue')
            },         
            ],
        },
        ]
    },
    {
        path: '/test',
        component: () => import('/@/views/Test.vue'),
    },

    ]
})

router.beforeEach(() => {
    console.log('路由拦截')
})

export default router