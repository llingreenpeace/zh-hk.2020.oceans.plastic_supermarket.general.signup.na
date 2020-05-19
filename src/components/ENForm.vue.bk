<template>
  <div id="enform" class="form-container form-container--sticky sticky">
    <div class="form-header text-white mt-2 mb-4 text-2xl text-center font-bold">
      <h2 class="mb-2">加快超市走塑 急需你的力量</h2>
      <p class="font-normal text-sm">
        一同發聲，要求包括龍頭惠康在內的超市回應你的訴求：制定完整減塑藍圖、發展可重用包裝銷售模式、淘汰無謂塑膠包裝，並提供走塑購物選項，讓你「有得揀」。
      </p>
    </div>
    <div class="form-body">
      <form>
        <div class="form-row">
          <div class="flex flex-wrap">
            <div class="w-full mb-4 md:mb-0 md:w-1/2 md:pr-1">
              <label class="form-label">姓氏 Last Name</label>
              <input
                v-model="ruleForm.lastName"
                class="form-input"
                name="LastName"
                type="text"
                placeholder="姓氏 Last Name"
              />
            </div>
            <div class="w-full md:w-1/2 md:pl-2">
              <label class="form-label">名字 First Name</label>
              <input
                v-model="ruleForm.firstName"
                class="form-input"
                name="FirstName"
                type="text"
                placeholder="名字 First Name"
              />
            </div>
          </div>
        </div>
        <div class="form-row">
          <label for class="form-label">電郵地址 Email Address</label>
          <input
            v-model="ruleForm.email"
            class="form-input"
            name="Email"
            type="text"
            placeholder="電郵地址 Email Address"
          />
        </div>
        <div class="form-row">
          <label class="form-label">聯絡電話 Phone Number</label>
          <input
            v-model="ruleForm.phoneNumber"
            name="Phone"
            class="form-input"
            type="text"
            placeholder="聯絡電話 Mobile Number"
          />
        </div>
        <div class="form-row">
          <label class="form-label">出生日期 Birthdate</label>
          <div class="relative">
            <input
              v-model="ruleForm.birthdate"
              name="Birthdate"
              class="form-input"
              type="date"
              placeholder="出生日期 Birthdate"
            />
            <div class="absolute flex items-center h-full top-0 right-0 px-2 py-2">
              <svg
                class="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="form-row py-2">
          <label class="flex">
            <div
              class="checkbox bg-white border border-gray-300 w-4 h-4 mt-1 flex flex-shrink-0 justify-center items-center"
            >
              <input v-model="ruleForm.emailOK" class="hidden" checked type="checkbox" />
              <svg
                class="tick fill-current hidden w-2 h-2 text-gpgreen pointer-events-none"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            </div>
            <span class="form-label flex-1">
              <span class="block text-xs text-gray-500">
                我願意收到綠色和平發送的通訊，讓我能掌握環保工作的最新脈動！我同意綠色和平按照
                <u>個人資料政策</u>與我聯絡，包括提供環保工作資訊及捐款呼籲等。
              </span>
            </span>
          </label>
        </div>
        <div class="form-row">
          <button @click="checkForm" class="form-button">立即聯署</button>
        </div>
      </form>
    </div>
  </div>
</template>
